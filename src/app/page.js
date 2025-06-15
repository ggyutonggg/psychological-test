'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PsychologicalTest() {
  const [currentScreen, setCurrentScreen] = useState('intro');
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [imageError, setImageError] = useState({});

  const questions = [
    { 
      id: 1, 
      image: '/img/bunny_ques_1.png',
      options: [
        '幫大家整理裝備，氣瓶、蛙鞋都排好',
        '拿出手機狂拍，IG 限動已發 5 則',
        '坐著放空，默默記每個人的臉',
        '偷偷問：「這趟潛水有沒有看到魟魚？」'
      ]
    },
    { 
      id: 2, 
      image: '/img/bunny_ques_2.png',
      options: [
        '發藥、發塑膠袋、分口香糖，化身醫療官',
        '吃早餐順便拍「暈浪特寫」自拍',
        '先暈三分鐘，再靜靜躺著，調整呼吸',
        '很興奮說說浪這麼大好刺激！'
      ]
    },
    { 
      id: 3, 
      image: '/img/bunny_ques_3.png',
      options: [
        '認真聽講，記住每個知識點',
        '看一下，再轉頭跟潛伴自拍',
        '看起來很認真，但其實腦袋空白',
        '一直問導潛：「等等可以追魚群嗎？」'
      ]
    },
    { 
      id: 4, 
      image: '/img/bunny_ques_4.png',
      options: [
        '幫忙洗裝備，檢查大家有沒有弄丟東西',
        '馬上用 GoPro 傳照片、修圖、發文',
        '躺著曬太陽，享受陽光的沐浴',
        '一邊講剛剛下水的事一邊比手畫腳'
      ]
    },
    { 
      id: 5, 
      image: '/img/bunny_ques_5.png',
      options: [
        '幫人裝好備燈，順便測電量',
        '在跟教練比誰的燈比較亮',
        '很害怕，在想自己幹嘛要答應來夜潛',
        '超興奮地準備要去找會發光的東西'
      ]
    },
    { 
      id: 6, 
      image: '/img/bunny_ques_6.png',
      options: [
        '幫大隊檢查是否有把東西帶齊',
        '把照片整理到雲端發到群組',
        '默默打包裝備，眼眶有點濕濕的',
        '「下次大家一起去帛琉啦！」立刻開群組'
      ]
    },
  ];

  const handleImageError = (imagePath) => {
    setImageError(prev => ({ ...prev, [imagePath]: true }));
  };

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < 6) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 計算結果
      setShowLoading(true);
      setTimeout(() => {
        const resultCounts = {
          A: newAnswers.filter(a => a === 'A').length,
          B: newAnswers.filter(a => a === 'B').length,
          C: newAnswers.filter(a => a === 'C').length,
          D: newAnswers.filter(a => a === 'D').length,
        };
        
        const maxAnswer = Object.keys(resultCounts).reduce((a, b) => 
          resultCounts[a] > resultCounts[b] ? a : b
        );
        
        setResult(maxAnswer);
        setShowLoading(false);
        setCurrentScreen('result');
      }, 3000);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    } else {
      setCurrentScreen('intro');
    }
  };

  const handleReset = () => {
    setCurrentScreen('intro');
    setCurrentQuestion(1);
    setAnswers([]);
    setResult(null);
    setShowLoading(false);
    setImageError({});
  };

  const renderIntro = () => (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-400 to-purple-600">
      {!imageError['/img/bunny_intro_background.png'] && (
        <Image
          src="/img/bunny_intro_background.png"
          alt="Intro Background"
          fill
          className="object-cover"
          priority
          onError={() => handleImageError('/img/bunny_intro_background.png')}
        />
      )}
      
      {/* Bunny Intro Image - 畫面上半部的一半位置 */}
      <div className="absolute inset-0 flex flex-col items-center">
        <div className="h-1/2 flex items-end justify-center pb-8">
          {!imageError['/img/bunny_intro_bunny.png'] ? (
            <Image
              src="/img/bunny_intro_bunny.png"
              alt="Intro Bunny"
              width={400}
              height={400}
              className="animate-bounce-slow hover:scale-105 transition-transform"
              onError={() => handleImageError('/img/bunny_intro_bunny.png')}
            />
          ) : (
            <div className="w-96 h-96 bg-white bg-opacity-20 rounded-lg flex items-center justify-center animate-bounce-slow">
              <span className="text-6xl">🐰</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Start Button - 按照1920:1500比例定位 */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ top: '78.125%' }}>
        <button
          onClick={() => setCurrentScreen('question')}
          className="relative z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 transition-all duration-200"
        >
          {!imageError['/img/bunny_btn_start.png'] ? (
            <Image
              src="/img/bunny_btn_start.png"
              alt="Start Button"
              width={200}
              height={80}
              className="hover:scale-105 transition-transform"
              onError={() => handleImageError('/img/bunny_btn_start.png')}
            />
          ) : (
            <div className="text-2xl font-bold text-white px-8 py-4">
              開始測驗
            </div>
          )}
        </button>
      </div>
    </div>
  );

  const renderQuestion = () => (
    <div className="relative w-full h-full bg-gradient-to-br from-green-400 to-blue-500">
      {!imageError['/img/bunny_ques _background.png'] && (
        <Image
          src="/img/bunny_ques _background.png"
          alt="Question Background"
          fill
          className="object-cover"
          onError={() => handleImageError('/img/bunny_ques _background.png')}
        />
      )}
      
      {/* Question Image - 直接顯示，無背景，15%位置，放大1.3倍 */}
      <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 z-10 w-4/5">
        {!imageError[questions[currentQuestion - 1].image] ? (
          <Image
            src={questions[currentQuestion - 1].image}
            alt={`Question ${currentQuestion}`}
            width={300}
            height={200}
            className="mx-auto"
            style={{ transform: 'scale(1.3)' }}
            onError={() => handleImageError(questions[currentQuestion - 1].image)}
          />
        ) : (
          <div className="text-center">
            <div className="bg-gray-200 rounded-lg p-8 text-gray-600">
              問題圖片載入中...
            </div>
          </div>
        )}
      </div>

      {/* Answer Options - 修改樣式，移到35%位置 */}
      <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 z-10 w-4/5">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {['A', 'B', 'C', 'D'].map((option, index) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="w-full transition-all duration-200 shadow-lg hover:scale-105"
              style={{ 
                backgroundColor: '#10b981', // emerald-500 的十六進制顏色
                border: '1px solid black',
                borderRadius: '25px',
                padding: '15px 24px',
                textAlign: 'center'
              }}
            >
              <div className="text-center">
                <span className="text-sm text-white font-bold leading-relaxed">
                  {questions[currentQuestion - 1].options[index]}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Back Button - 縮小1.5倍，靠左邊位置 */}
      <div className="absolute top-[85%] left-4 z-20">
        <button
          onClick={handleBack}
          className="transition-transform duration-200 hover:scale-110"
        >
          {!imageError['/img/bunny_btn_back.png'] ? (
            <Image
              src="/img/bunny_btn_back.png"
              alt="Back Button"
              width={66}
              height={26}
              className="w-auto h-auto"
              onError={() => handleImageError('/img/bunny_btn_back.png')}
            />
          ) : (
            <div className="text-white text-xl px-3 py-2">←</div>
          )}
        </button>
      </div>
    </div>
  );

  const renderLoading = () => (
    <div className="relative w-full h-full bg-gradient-to-br from-orange-400 to-red-500">
      {!imageError['/img/bunny_loading_background.png'] && (
        <Image
          src="/img/bunny_loading_background.png"
          alt="Loading Background"
          fill
          className="object-cover"
          onError={() => handleImageError('/img/bunny_loading_background.png')}
        />
      )}
    </div>
  );

  const renderResult = () => {
    // 所有結果都顯示對應的背景圖片
    const backgroundImagePath = `/img/bunny_result_${result}_backgroud.png`;
    const bunnyImagePath = `/img/bunny_result_${result}_bunny.png`;

    console.log('=== 結果頁面調試信息 ===');
    console.log('Rendering result:', result);
    console.log('Background path:', backgroundImagePath);
    console.log('Bunny image path:', bunnyImagePath);
    console.log('Current imageError state:', imageError);

    return (
      <div className="relative w-full h-full bg-gradient-to-br from-purple-400 to-pink-500">
        {/* 背景圖片 - 所有結果都顯示 */}
        <img
          src={backgroundImagePath}
          alt={`Result ${result} Background`}
          className="absolute inset-0 w-full h-full object-cover z-0"
          onLoad={() => {
            console.log('✅ Background image loaded successfully:', backgroundImagePath);
          }}
          onError={(e) => {
            console.log('❌ Background image failed to load:', backgroundImagePath);
            console.log('Error details:', e);
            e.target.style.display = 'none';
          }}
        />
        
        {/* 結果兔子圖片 */}
        <div className="absolute top-[8%] z-10" style={{ right: '12px' }}>
          <img
            src={bunnyImagePath}
            alt={`Result ${result} Bunny`}
            className="animate-bounce-slow"
            style={{ 
              width: '195px',
              height: 'auto'
            }}
            onError={(e) => {
              console.log('❌ Bunny image failed to load:', bunnyImagePath);
              e.target.style.display = 'none';
            }}
          />
        </div>
        
        {/* 重置按鈕 - 調整為和返回按鈕一樣的大小，放在右邊 */}
        <div className="absolute top-[85%] right-4 z-20">
          <button
            onClick={handleReset}
            className="transition-transform duration-200 hover:scale-110"
          >
            {!imageError['/img/bunny_btn_reset.png'] ? (
              <Image
                src="/img/bunny_btn_reset.png"
                alt="Reset Button"
                width={66}
                height={26}
                className="w-auto h-auto"
                onError={() => handleImageError('/img/bunny_btn_reset.png')}
              />
            ) : (
              <div className="text-white text-xl px-3 py-2">重新開始</div>
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      {/* 主頁面背景圖片 */}
      <Image
        src="/img/bunny_background.png"
        alt="Main Background"
        fill
        className="object-cover"
        priority
        onError={() => console.log('❌ Main background image failed to load')}
      />
      <div className="mobile-frame relative z-10">
        {showLoading ? (
          renderLoading()
        ) : currentScreen === 'intro' ? (
          renderIntro()
        ) : currentScreen === 'question' ? (
          renderQuestion()
        ) : currentScreen === 'result' ? (
          renderResult()
        ) : null}
      </div>
    </div>
  );
}
