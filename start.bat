@echo off
echo ==============================================
echo   Iniciando Entorno de Desarrollo - MiHotelApp
echo ==============================================

echo [1/2] Verificando Backend...
cd backend
if not exist node_modules (
    echo Instalando dependencias del servidor...
    call npm install express cors sqlite3
)
start cmd /k "title Backend Server && node server.js"

echo [2/2] Verificando Frontend...
cd ../frontend
if not exist node_modules (
    echo Instalando dependencias del cliente...
    call npm install
)
start cmd /k "title Frontend Vite && npm run dev"

cd ..
echo Entorno levantado con exito.