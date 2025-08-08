import { Module, Global } from '@nestjs/common';
import { Browser, chromium } from 'playwright';

@Global()
@Module({
  providers: [
    {
      provide:'PLAYWRIGHT_BROWSER',
      useFactory: async () => {
        const webview:Browser  = await chromium.launch({ 
          headless: true,
          slowMo: 5000,
        });
        
        return webview;
      },
    },
  ],
  exports: ['PLAYWRIGHT_BROWSER'],
})
export class PlaywrightModule{};