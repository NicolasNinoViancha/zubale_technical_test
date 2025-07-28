import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationTree} from '@shared/navigation';
import {ThemeProvider} from '@shared/context/theme';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationTree />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
