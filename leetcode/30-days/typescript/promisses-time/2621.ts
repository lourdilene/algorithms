async function sleep(millis: number): Promise<void> {
  return await new Promise((resolv) => setTimeout(resolv, millis));
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
