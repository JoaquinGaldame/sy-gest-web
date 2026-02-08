# SyGest Web

Frontend empresarial para el Sistema de Gestión. Construido en Angular 20 con arquitectura modular por bounded contexts, estado global con NgRx y una capa de UI consistente (Tailwind + PrimeNG).

## Objetivo

- Entregar una base sólida y escalable para módulos de negocio.
- Estandarizar estado global, navegación, theming y contratos API.
- Mantener un diseño profesional, con landing y login listos para venta/uso real.

## Stack

- Angular 20 (standalone APIs + estructura por módulos/feature folders)
- Tailwind CSS 3.4.17
- PrimeNG 20.4.0 + PrimeIcons
- NgRx 20.1.0 (Store, Effects, Entity, Router Store, Devtools)
- ESLint + Prettier

## Scripts

- `npm start` - servidor de desarrollo
- `npm run build` - build de producción
- `npm run test` - unit tests
- `npm run lint` - lint

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm start
```

## Build por ambiente

- Producción

```bash
ng build --configuration=production
```

- Desarrollo

```bash
ng build --configuration=development
```

## Arquitectura

```
src/
  app/
    core/
      api/
      auth/
      guards/
      interceptors/
      layout/
      state/
      services/
      utils/
      theme/
    shared/
      ui/
      components/
      directives/
      pipes/
      models/
      state/
    features/
      public/
      inventory/
      hr/
      finance/
      system-admin/
    app.routes.ts
    app.config.ts
```

### Bounded contexts

- `inventory`
- `hr`
- `finance`
- `system-admin`
- `public`

### Reglas principales

- Cada feature tiene `routes`, `state`, `pages`, `components`, `menu`.
- **Todas las páginas internas son placeholders PRÓXIMAMENTE** (título + bloque estándar).
- `public` contiene landing y login.
- `core` concentra layout, guards, interceptors, theme y api client.

## Rutas

- `/` landing
- `/login` login público
- `/app` shell privado
- `/app/inventory/*`
- `/app/hr/*`
- `/app/finance/*`
- `/app/system-admin/*` (superusuarios)
- `/app/settings`

## Theming

- Paleta Light:
- Primary `#0B3C5D`
- Secondary `#1F8A9D`
- Background `#F3F6F8`
- Accent `#2EC4B6`
- El preset de PrimeNG se define en `src/app/core/theme/prime-theme.ts`.
- `ThemeService` aplica la clase `dark` en `html` y sincroniza con NgRx Settings.
- Tailwind usa `darkMode: 'class'`.

## NgRx

- Estado global en `src/app/core/state` (auth, settings).
- No usar servicios con state local para features de negocio.
- Effects centralizan side-effects y llamadas a API.

## UI + Toasts

- Toast global con PrimeNG (`p-toast`) en `AppComponent`.
- `NotificationService` estandariza `success/info/warn/error`.

## API Contract

- `ApiResponse<T>` basado en el backend: `success`, `result`, `message`, `error`, `data`, `details`, `meta`, `debug`.
- `ApiHttpInterceptor` agrega JWT y normaliza errores.

## Menú por módulo

- El menú se define en `src/app/core/layout/module-definitions.ts`.
- Cada módulo tiene su definición en `features/<modulo>/menu`.

## Convenciones de ambiente

- `src/environments/environment.ts` es el default.
- `src/environments/environment.production.ts` para producción.
- `src/environments/environment.development.ts` para desarrollo.

## Comandos de bootstrap ejecutados

```bash
ng new sy-gest-web --routing --style=css --skip-tests=false --standalone --directory sy-gest-web
npm install -D tailwindcss@3.4.17 postcss autoprefixer
npm install primeng@20.4.0 primeicons @angular/animations@^20.1.0 @angular/cdk@^20.0.3
npm install @ngrx/store@20.1.0 @ngrx/effects@20.1.0 @ngrx/entity@20.1.0 @ngrx/router-store@20.1.0 @ngrx/store-devtools@20.1.0
ng add @angular-eslint/schematics@20.7.0 --skip-confirmation
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

## Checklist de nuevas páginas

- Crear route y page con título + bloque PRÓXIMAMENTE.
- Agregar estado NgRx si aplica.
- Registrar item en menú del módulo.
- Mantener la navegación en `/app`.
