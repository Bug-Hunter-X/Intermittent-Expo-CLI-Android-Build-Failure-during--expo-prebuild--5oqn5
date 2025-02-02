// bugSolution.js
//Workaround: Clean the cache and rebuild
const { exec } = require('child_process');

exec('expo prebuild --clean', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error cleaning cache: ${error}`);
    return;
  }
  console.log(`Cache cleaned: ${stdout}`);
  exec('expo build:android', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error building Android app: ${error}`);
      return;
    }
    console.log(`Android app built: ${stdout}`);
  });
});

//bug.js (Example file showing no specific error in the code)
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
