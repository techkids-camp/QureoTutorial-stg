# QureoMinecraft

## エージェントにスイッチをおしてもらおう！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunをいれてプログラムをうごかしてみよう！

```ghost
player.onChat("run", function () {
    for (let index = 0; index < 12; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.detect(AgentDetection.Block, DOWN) == false) {
           hiragana_agent.turn(LEFT_TURN)
        }
    }
    while (true) {
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == BRICKS) {
            hiragana_agent.turn(LEFT_TURN)
        }
    }
})

```