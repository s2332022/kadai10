import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface WarningScreenProps {
  onReset: () => void;
}

export const WarningScreen: React.FC<WarningScreenProps> = ({ onReset }) => {
  return (
    <div className="fade-in-up">
      <div className="card border-danger border-2 shadow-lg text-center overflow-hidden">
        
        <div className="card-body p-4 p-md-5 position-relative z-1" style={{ backgroundColor: '#fff5f5' }}>
          <div className="d-inline-flex bg-danger bg-opacity-10 p-3 rounded-circle mb-4">
            <AlertTriangle size={64} className="text-danger" />
          </div>

          <h1 className="h2 fw-bold text-danger mb-3">
            警告: あなたの情報はぬすまれました！ｗ
          </h1>

          <p className="text-secondary mb-4">
            おつかれさまです
          </p>

          <div className="bg-white p-3 rounded border border-danger-subtle shadow-sm mb-4 text-start">
            <h6 className="small fw-bold text-muted text-uppercase mb-2">ステータス</h6>
            <div className="d-flex align-items-center text-danger font-monospace small">
              <span className="d-inline-block rounded-circle bg-danger me-2" style={{ width: '8px', height: '8px' }}></span>
              WARNING: きけんがあぶない！！！
            </div>
          </div>

          <button
            onClick={onReset}
            className="btn btn-outline-danger d-inline-flex align-items-center px-4 py-2"
          >
            <RotateCcw size={18} className="me-2" />
            戻る
          </button>
        </div>
      </div>
    </div>
  );
};