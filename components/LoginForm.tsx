import React, { useState, useCallback } from 'react';
import { Lock, User } from 'lucide-react';

interface LoginFormProps {
  onSubmit: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onSubmit();
    }
  }, [email, password, onSubmit]);

  return (
    <div className="card shadow border-0 rounded-4 overflow-hidden">
      <div className="card-header bg-primary text-center p-4 border-0">
        <h2 className="h3 fw-bold text-white mb-1">ログイン</h2>
        <p className="text-white-50 small mb-0">アカウントにアクセスしてください</p>
      </div>

      <div className="card-body p-4 p-md-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="form-label fw-medium text-secondary">
              メールアドレス
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0 text-secondary">
                <User size={18} />
              </span>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control border-start-0 bg-light"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <label htmlFor="password" className="form-label fw-medium text-secondary mb-0">
                パスワード
              </label>
              <a href="#" className="small text-decoration-none text-primary">
                パスワードをお忘れですか？
              </a>
            </div>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0 text-secondary">
                <Lock size={18} />
              </span>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control border-start-0 bg-light"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 py-2 fw-medium shadow-sm"
          >
            ログイン
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="small text-muted mb-0">
            アカウントをお持ちでない場合は <a href="#" className="text-decoration-none text-primary">新規登録</a>
          </p>
        </div>
      </div>
    </div>
  );
};