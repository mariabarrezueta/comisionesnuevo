# Sistema de Cálculo de Comisiones

Este proyecto permite calcular las comisiones generadas por vendedores en función del monto total vendido durante un rango de fechas específico, basado en reglas configurables.

## Tecnologías utilizadas

- **Frontend:** Angular 16
- **Backend:** ASP.NET Core Web API (.NET 7 o superior)
- **Base de Datos:** SQL Server (Azure SQL compatible) local - BASE DE DATOS EN AZURE PARA DESPLIEGUE

---

## Funcionalidad principal

1. El usuario ingresa un **rango de fechas** en el frontend.
2. El sistema calcula el total vendido por cada vendedor en ese periodo.
3. Se aplica una **regla de comisión** (porcentaje) según el total acumulado.
4. El resultado muestra el nombre del vendedor, total vendido y comisión ganada.

---

## Estructura de la base de datos

### Tabla `Regla`
| Id | Porcentaje | MontoMinimo |
|----|------------|-------------|
| 1  | 0.06       | 0.00        |
| 2  | 0.08       | 500.00      |
| 3  | 0.10       | 800.00      |
| 4  | 0.15       | 1000.00     |

### Tabla `Vendedor`
- `Id` (PK)
- `Nombre`

### Tabla `Venta`
- `Id` (PK)
- `VendedorId` (FK)
- `FechaVenta`
- `Monto`

---

## Frontend Angular
Proyecto generado con Angular CLI 16.
Ingresar dos fechas (fechaInicio y fechaFin).
Al hacer clic en "Calcular Comisiones", se muestran los resultados en una tabla.

**Ejecucion Local:**
- dotnet run (BACKEND)
  FRONTEND
- cd frontend-clasico
- npm install
- ng serve
  
## DEspliegue 
Backend y Frontend integrados
Tecnologías:
Backend: ASP.NET Core 7.0
Frontend: Angular v16 (integrado con wwwroot)
Servicio de hosting: Azure App Service

URL del sistema:
https://minicorecomision20250623141123.azurewebsites.net/

  

