### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントの◯のブロック||``

``||agent.エージェントに◯をはかいさせる||``

``||agent.エージェントを◯に◯ブロックいどうさせる||``

``||blocks.丸石（まるいし）ブロック||``

``||logic.もし◯なら〜でなければ〜||``
``||logic.=||``
    

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 11; index++) {
        hiragana_agent.move(RIGHT, 1)
    }
})

```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 11; index++) {
        hiragana_agent.move(RIGHT, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, RIGHT) == COBBLESTONE) {
            hiragana_agent.move(DOWN, 1)
            hiragana_agent.move(RIGHT, 2)
            hiragana_agent.move(UP, 1)
        } else {
            hiragana_agent.destroy(RIGHT)
        }
    }
})
```