### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに〇をはかいさせる||``

``||agent.エージェントを〇に〇ブロックいどうさせる||``

``||agent.エージェントにどんなブロックがあるか、〇を確認させる||``

``||logic.もし〇なら||``
``||logic.=||``

``||blocks.ダイヤモンドブロック||``

``||loop.くりかえしを終わる||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおそう！

```template
player.onChat("run", function () {
    while (true) {

    }
})

```

```ghost
while (true) {
    hiragana_agent.destroy(FORWARD)
    hiragana_agent.move(RIGHT, 1)
    if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == DIAMOND_BLOCK) {
        break;
    }
}

```