import React, { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { WarningScreen } from './components/WarningScreen';

const App: React.FC = () => {
  const [isHacked, setIsHacked] = useState<boolean>(false);

  const handleLoginSubmit = () => {
    setIsHacked(true);
  };

  const handleReset = () => {
    setIsHacked(false);
  };

  return (
    <div className="d-flex flex-column min-vh-100 font-sans">
      {/* Simple Header */}
      <header className="w-100 bg-white shadow-sm py-3 mb-4">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="fw-bold fs-4 text-primary">ビジュアルコンテンツデザイン10回課題</div>
          <div className="text-muted small">test</div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow-1 d-flex align-items-center justify-content-center p-3">
        <div className="w-100" style={{ maxWidth: '450px' }}>
          {isHacked ? (
            <WarningScreen onReset={handleReset} />
          ) : (
            <LoginForm onSubmit={handleLoginSubmit} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-100 p-3 text-center text-muted small mt-auto">
        &copy; 2332022　大河原佑貴
      </footer>
    </div>
  );
};

export default App;