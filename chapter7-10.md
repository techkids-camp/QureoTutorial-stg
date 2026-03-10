### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに〇をはかいさせる|``
``||agent.エージェントの〇のブロック||``
``||logic.もし〇〇なら||``
``||logic.=||``
``||blocks.レンガブロック||``


みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        for (let index = 0; index < 10; index++) {
            hiragana_agent.move(UP, 1)
        }
        hiragana_agent.move(DOWN, 10)
        hiragana_agent.move(RIGHT, 1)
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        for (let index = 0; index < 10; index++) {
            hiragana_agent.move(UP, 1)
            if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == BRICKS) {
                hiragana_agent.destroy(FORWARD)
            }
        }
        hiragana_agent.move(DOWN, 10)
        hiragana_agent.move(RIGHT, 1)
    }
})
```