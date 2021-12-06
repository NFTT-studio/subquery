(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{701:function(t,e,a){"use strict";a.r(e);var s=a(1),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"マニフェストファイル"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#マニフェストファイル"}},[t._v("#")]),t._v(" マニフェストファイル")]),t._v(" "),a("p",[t._v("マニフェストファイル "),a("code",[t._v("project.yaml")]),t._v(" は、プロジェクトのエントリー・ポイントと見なすことができ、SubQuery がどのようにインデックスを作成し、チェーン・データを変換するかについて詳細を定義します。")]),t._v(" "),a("p",[t._v("マニフェストは YAML または JSON 形式で使用できます。 このドキュメントでは、すべての例で YAML を使用します。 以下は、基本的な "),a("code",[t._v("project.yaml")]),t._v(" の標準的な例です。")]),t._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"v0.2.0",active:""}},[t._v(" ``` yml specVersion: 0.2.0 name: example-project # Provide the project name version: 1.0.0  # Project version description: '' # Description of your project repository: 'https://github.com/subquery/subql-starter' # Git repository address of your project schema: file: ./schema.graphql # The location of your GraphQL schema file network: genesisHash: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3' # Genesis hash of the network endpoint: 'wss://polkadot.api.onfinality.io/public-ws' # Optionally provide the HTTP endpoint of a full chain dictionary to speed up processing dictionary: 'https://api.subquery.network/sq/subquery/dictionary-polkadot' dataSources: - kind: substrate/Runtime startBlock: 1 # This changes your indexing start block, set this higher to skip initial blocks with less data mapping: file: \"./dist/index.js\" handlers: - handler: handleBlock kind: substrate/BlockHandler - handler: handleEvent kind: substrate/EventHandler filter: #Filter is optional module: balances method: Deposit - handler: handleCall kind: substrate/CallHandler ```` ")]),t._v(" "),a("CodeGroupItem",{attrs:{title:"v0.0.1"}},[t._v(" ``` yml specVersion: \"0.0.1\" description: '' # Description of your project repository: 'https://github.com/subquery/subql-starter' # Git repository address of your project schema: ./schema.graphql # The location of your GraphQL schema file network: endpoint: 'wss://polkadot.api.onfinality.io/public-ws' # Optionally provide the HTTP endpoint of a full chain dictionary to speed up processing dictionary: 'https://api.subquery.network/sq/subquery/dictionary-polkadot' dataSources: - name: main kind: substrate/Runtime startBlock: 1 # This changes your indexing start block, set this higher to skip initial blocks with less data mapping: handlers: - handler: handleBlock kind: substrate/BlockHandler - handler: handleEvent kind: substrate/EventHandler filter: #Filter is optional but suggested to speed up event processing module: balances method: Deposit - handler: handleCall kind: substrate/CallHandler ```` ")])],1),t._v(" "),a("h2",{attrs:{id:"v0-0-1からv0-2-0への移行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v0-0-1からv0-2-0への移行"}},[t._v("#")]),t._v(" v0.0.1からv0.2.0への移行 "),a("Badge",{attrs:{text:"upgrade",type:"warning"}})],1),t._v(" "),a("p",[a("strong",[t._v("specVersion v0.0.1のプロジェクトがあれば、"),a("code",[t._v("subql migrate")]),t._v("を使って素早くアップグレードすることができます。 "),a("a",{attrs:{href:"#cli-options"}},[t._v("詳細はこちら")]),t._v(" を参照")])]),t._v(" "),a("p",[a("code",[t._v("network")]),t._v(" 下:")]),t._v(" "),a("ul",[a("li",[t._v("使用されているチェーンを識別するのに役立つ "),a("code",[t._v("genesisHash")]),t._v(" フィールドが新たに"),a("strong",[t._v("必須")]),t._v("となりました。")]),t._v(" "),a("li",[t._v("v0.2.0 以上では、カスタムチェーンを参照している場合、外部 "),a("a",{attrs:{href:"#custom-chains"}},[t._v("チェーンタイプ ファイル")]),t._v(" を参照できます。")])]),t._v(" "),a("p",[a("code",[t._v("dataSources")]),t._v(" 下:")]),t._v(" "),a("ul",[a("li",[t._v("マッピングハンドラの "),a("code",[t._v("index.js")]),t._v(" エントリポイントを直接リンクすることができます。 デフォルトでは、この "),a("code",[t._v("index.js")]),t._v(" は、ビルド プロセス中に "),a("code",[t._v("index.ts")]),t._v(" から生成されます。")]),t._v(" "),a("li",[t._v("データソースは、通常のランタイムデータソースまたは "),a("a",{attrs:{href:"#custom-data-sources"}},[t._v("カスタムデータソース")]),t._v("のいずれかになります。")])]),t._v(" "),a("h3",{attrs:{id:"コマンドラインオプション"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#コマンドラインオプション"}},[t._v("#")]),t._v(" コマンドラインオプション")]),t._v(" "),a("p",[t._v("v0.2.0のスペックバージョンはベータ版ですが、プロジェクトの初期化時に"),a("code",[t._v("subql init --specVersion 0.2.0 PROJECT_NAME")]),t._v("を実行して、明示的に定義する必要があります。")]),t._v(" "),a("p",[a("code",[t._v("subql migration")]),t._v(" は既存のプロジェクトで実行して、プロジェクトマニフェストを最新バージョンに移行できます。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("オプション")]),t._v(" "),a("th",[t._v("説明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-f, --force")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-l, --location")]),t._v(" "),a("td",[t._v("移行するローカル フォルダ (project.yamlを含む必要があります)")])]),t._v(" "),a("tr",[a("td",[t._v("--file=file")]),t._v(" "),a("td",[t._v("移行するproject.yaml を指定します")])])])]),t._v(" "),a("h2",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),a("h3",{attrs:{id:"トップレベルの仕様"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#トップレベルの仕様"}},[t._v("#")]),t._v(" トップレベルの仕様")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("フィールド")]),t._v(" "),a("th",[t._v("v0.0.1")]),t._v(" "),a("th",[t._v("v0.2.0")]),t._v(" "),a("th",[t._v("説明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("specVersion")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[a("code",[t._v("0.0.1")]),t._v(" または "),a("code",[t._v("0.2.0")]),t._v(" - マニフェストファイルバージョン")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("name")])]),t._v(" "),a("td",[t._v("𐄂")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("プロジェクト名")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("version")])]),t._v(" "),a("td",[t._v("𐄂")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("プロジェクトのバージョン")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("description")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("あなたのプロジェクトの説明")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("repository")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("プロジェクトの Git リポジトリアドレス")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("schema")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[a("a",{attrs:{href:"#schema-spec"}},[t._v("Schema Spec")])]),t._v(" "),a("td",[t._v("GraphQLスキーマファイルの場所")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("network")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#network-spec"}},[t._v("Network Spec")])]),t._v(" "),a("td",[t._v("Network Spec")]),t._v(" "),a("td",[t._v("インデックスを作成するネットワークの詳細")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("dataSources")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#datasource-spec"}},[t._v("DataSource Spec")])]),t._v(" "),a("td",[t._v("DataSource Spec")]),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"スキーマの仕様"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#スキーマの仕様"}},[t._v("#")]),t._v(" スキーマの仕様")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("フィールド")]),t._v(" "),a("th",[t._v("v0.0.1")]),t._v(" "),a("th",[t._v("v0.2.0")]),t._v(" "),a("th",[t._v("説明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("file")])]),t._v(" "),a("td",[t._v("𐄂")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("GraphQLスキーマファイルの場所")])])])]),t._v(" "),a("h3",{attrs:{id:"ネットワークの仕様"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ネットワークの仕様"}},[t._v("#")]),t._v(" ネットワークの仕様")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("フィールド")]),t._v(" "),a("th",[t._v("v0.0.1")]),t._v(" "),a("th",[t._v("v0.2.0")]),t._v(" "),a("th",[t._v("説明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("genesisHash")])]),t._v(" "),a("td",[t._v("𐄂")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("ネットワークの生成ハッシュ")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("endpoint")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("インデックスするブロックチェーンのwssまたはwsエンドポイントを定義します - "),a("strong",[t._v("これはフルアーカイブノード")]),t._v(" でなければなりません。 "),a("a",{attrs:{href:"https://app.onfinality.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("OnFinality"),a("OutboundLink")],1),t._v("では、すべてのパラチェーンのエンドポイントを無料で取得できます。")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("dictionary")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("処理を高速化するために、フルチェーンディクショナリのHTTPエンドポイントを提供することが推奨されます。"),a("RouterLink",{attrs:{to:"/ja/tutorials_examples/dictionary.html"}},[t._v("SubQuery Dictionaryの仕組み")]),t._v("を参照してください。")],1)]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("chaintypes")])]),t._v(" "),a("td",[t._v("𐄂")]),t._v(" "),a("td",[t._v("{file:String}")]),t._v(" "),a("td",[t._v("チェーンタイプファイルへのパス。 "),a("code",[t._v(".json")]),t._v(" または "),a("code",[t._v(".yaml")]),t._v(" 形式を使用してください。")])])])]),t._v(" "),a("h3",{attrs:{id:"データソース仕様"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#データソース仕様"}},[t._v("#")]),t._v(" データソース仕様")]),t._v(" "),a("p",[t._v("フィルターされ抽出されるデータと、適用されるデータ変換のためのマッピング関数ハンドラーの場所を定義します。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("フィールド")]),t._v(" "),a("th",[t._v("v0.0.1")]),t._v(" "),a("th",[t._v("v0.2.0")]),t._v(" "),a("th",[t._v("説明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("name")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("𐄂")]),t._v(" "),a("td",[t._v("データソースの名前")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("kind")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ja/create/manifest/#data-sources-and-mapping"}},[t._v("substrate/Runtime")])],1),t._v(" "),a("td",[t._v("substrate/Runtime, "),a("RouterLink",{attrs:{to:"/ja/create/manifest/#custom-data-sources"}},[t._v("substrate/CustomDataSource")])],1),t._v(" "),a("td",[t._v("デフォルトのsubstrateランタイムから、ブロック、イベント、外部関数(コール)などのデータタイプをサポートしています。 "),a("br"),t._v(" v0.2.0からは、スマートコントラクトなどのカスタムランタイムからのデータをサポートします。")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("startBlock")])]),t._v(" "),a("td",[t._v("Integer")]),t._v(" "),a("td",[t._v("Integer")]),t._v(" "),a("td",[t._v("インデックス開始ブロックを変更します。データ量が少ない最初のブロックをスキップするように設定します。")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("mapping")])]),t._v(" "),a("td",[t._v("Mapping Spec")]),t._v(" "),a("td",[t._v("Mapping Spec")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("filter")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ja/create/manifest/#network-filters"}},[t._v("network-filters")])],1),t._v(" "),a("td",[t._v("𐄂")]),t._v(" "),a("td",[t._v("ネットワークエンドポイントの仕様名で実行するデータソースをフィルタする")])])])]),t._v(" "),a("h3",{attrs:{id:"マッピング仕様"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#マッピング仕様"}},[t._v("#")]),t._v(" マッピング仕様")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("フィールド")]),t._v(" "),a("th",[t._v("v0.0.1")]),t._v(" "),a("th",[t._v("v0.2.0")]),t._v(" "),a("th",[t._v("説明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("file")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("𐄂")]),t._v(" "),a("td",[t._v("マッピングエントリへのパス")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("ハンドラ & フィルター")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ja/create/manifest/#mapping-handlers-and-filters"}},[t._v("デフォルトのハンドラとフィルタ")])],1),t._v(" "),a("td",[t._v("デフォルトのハンドラとフィルタ、 "),a("br"),a("a",{attrs:{href:"#custom-data-sources"}},[t._v("カスタムハンドラとフィルタ")])]),t._v(" "),a("td",[t._v("追加のマッピングフィルタを使用して、すべての "),a("RouterLink",{attrs:{to:"/ja/create/mapping.html"}},[t._v("マッピング関数")]),t._v(" とそれに対応するハンドラータイプをリストします。 "),a("br"),a("br"),t._v(" カスタムランタイムマッピングハンドラについては、 "),a("a",{attrs:{href:"#custom-data-sources"}},[t._v("カスタムデータソース")]),t._v(" を参照してください。")],1)])])]),t._v(" "),a("h2",{attrs:{id:"データソースとマッピング"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#データソースとマッピング"}},[t._v("#")]),t._v(" データソースとマッピング")]),t._v(" "),a("p",[t._v("このセクションでは、デフォルトの Substrate ランタイムとそのマッピングについて説明します。 次に例を示します。")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dataSources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" substrate/Runtime "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Indicates that this is default runtime")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("startBlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This changes your indexing start block, set this higher to skip initial blocks with less data")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dist/index.js "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Entry path for this mapping")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"デフォルトのハンドラとフィルタ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#デフォルトのハンドラとフィルタ"}},[t._v("#")]),t._v(" デフォルトのハンドラとフィルタ")]),t._v(" "),a("p",[t._v("以下の表では、異なるハンドラでサポートされているフィルタについて説明します。")]),t._v(" "),a("p",[a("strong",[t._v("SubQuery プロジェクトは、イベントと適切なマッピングフィルタを使用するだけで、より効率的になります。")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("ハンドラ")]),t._v(" "),a("th",[t._v("サポートされるフィルタ")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ja/create/mapping.html#block-handler"}},[t._v("BlockHandler")])],1),t._v(" "),a("td",[a("code",[t._v("specVersion")])])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ja/create/mapping.html#event-handler"}},[t._v("EventHandler")])],1),t._v(" "),a("td",[a("code",[t._v("module")]),t._v(","),a("code",[t._v("method")])])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ja/create/mapping.html#call-handler"}},[t._v("CallHandler")])],1),t._v(" "),a("td",[a("code",[t._v("module")]),t._v(","),a("code",[t._v("method")]),t._v(" ,"),a("code",[t._v("success")])])])])]),t._v(" "),a("p",[t._v("デフォルトのランタイムマッピングフィルタは、どのブロック、イベント、または外部のどちらがマッピングハンドラをトリガーするかを決定するために非常に便利な機能です。")]),t._v(" "),a("p",[t._v("フィルター条件を満たす受信データのみがマッピング関数により処理されます。 マッピングフィルタはオプションですが、SubQuery プロジェクトによって処理されるデータの量を大幅に削減し、インデックス作成のパフォーマンスを向上させるために強く推奨されます。")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example filter from callHandler")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" balances\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deposit\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ul",[a("li",[t._v("モジュールとメソッドフィルタは、Substrate-based chainでサポートされています。")]),t._v(" "),a("li",[a("code",[t._v("success")]),t._v(" フィルタはブール値を取り、成功状況によって外部値をフィルタリングするために使用できます。")]),t._v(" "),a("li",[a("code",[t._v("specVersion")]),t._v(" フィルタは、Substrate ブロックの仕様バージョン範囲を指定します。 以下の例では、バージョン範囲を設定する方法を説明します。")])]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("specVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Index block with specVersion in between 23 and 24 (inclusive).")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("specVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Index block with specVersion greater than or equal 100.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("specVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token null important"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Index block with specVersion less than or equal 23.")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"カスタムチェーン"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#カスタムチェーン"}},[t._v("#")]),t._v(" カスタムチェーン")]),t._v(" "),a("h3",{attrs:{id:"ネットワークの仕様-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ネットワークの仕様-2"}},[t._v("#")]),t._v(" ネットワークの仕様")]),t._v(" "),a("p",[t._v("別のPolkadot parachainやカスタムsubstrateチェーンに接続する場合は、このマニフェストの "),a("a",{attrs:{href:"#network-spec"}},[t._v("ネットワークの仕様")]),t._v(" セクションを編集する必要があります。")]),t._v(" "),a("p",[a("code",[t._v("genesisHash")]),t._v(" は常にカスタムネットワークの最初のブロックのハッシュでなければなりません。  "),a("a",{attrs:{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.api.onfinality.io%2Fpublic-ws#/explorer/query/0",target:"_blank",rel:"noopener noreferrer"}},[t._v("PolkadotJS"),a("OutboundLink")],1),t._v(" にアクセスして、"),a("strong",[t._v("block 0")]),t._v(" のハッシュを探せば、これを簡単に回収することができます（下の画像参照）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/genesis-hash.jpg",alt:"Genesis Hash"}})]),t._v(" "),a("p",[t._v("さらに、 "),a("code",[t._v("エンドポイント")]),t._v(" を更新する必要があります。 インデックスするブロックチェーンのwssまたはwsエンドポイントを定義します - "),a("strong",[t._v("これはフルアーカイブノード")]),t._v(" でなければなりません。 "),a("a",{attrs:{href:"https://app.onfinality.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("OnFinality"),a("OutboundLink")],1),t._v("では、すべてのパラチェーンのエンドポイントを無料で取得できます。")]),t._v(" "),a("h3",{attrs:{id:"チェーンタイプ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#チェーンタイプ"}},[t._v("#")]),t._v(" チェーンタイプ")]),t._v(" "),a("p",[t._v("マニフェストにチェーンタイプを含めることで、カスタムチェーンからのデータのインデックスを作成できます。")]),t._v(" "),a("p",[t._v("substrateランタイムモジュールで使用される追加の型をサポートしています。 "),a("code",[t._v("typesAlias")]),t._v("、 "),a("code",[t._v("typesBundle")]),t._v("、"),a("code",[t._v("typesChain")]),t._v("、"),a("code",[t._v("typesSpec")]),t._v("もサポートされています。")]),t._v(" "),a("p",[t._v("以下のv0.2.0の例では、"),a("code",[t._v("network.chaintypes")]),t._v("は、すべてのカスタムタイプが含まれているファイルを指しています。 これは、このブロックチェーンがサポートする特定のタイプを"),a("code",[t._v(".json")]),t._v("または"),a("code",[t._v(".yaml")]),t._v("形式で宣言する標準的なチェーンスペックファイルです。")]),t._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"v0.2.0",active:""}},[t._v(" ``` yml network: genesisHash: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3' endpoint: 'ws://host.kittychain.io/public-ws' chaintypes: file: ./types.json # The relative filepath to where custom types are stored ")]),t._v(" "),a("CodeGroupItem",{attrs:{title:"v0.0.1"}},[t._v(' ``` yml ... network: endpoint: "ws://host.kittychain.io/public-ws" types: { "KittyIndex": "u32", "Kitty": "[u8; 16]" } # typesChain: { chain: { Type5: \'example\' } } # typesSpec: { spec: { Type6: \'example\' } } dataSources: - name: runtime kind: substrate/Runtime startBlock: 1 filter:  #Optional specName: kitty-chain mapping: handlers: - handler: handleKittyBred kind: substrate/CallHandler filter: module: kitties method: breed success: true ``` ')])],1),t._v(" "),a("h2",{attrs:{id:"カスタムデータソース"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#カスタムデータソース"}},[t._v("#")]),t._v(" カスタムデータソース")]),t._v(" "),a("p",[t._v("カスタムデータソースは、データの取り扱いを容易にするネットワーク固有の機能を提供します。 これらは、追加のフィルタリングやデータ変換を提供するミドルウェアとして機能します。")]),t._v(" "),a("p",[t._v("その良い例がEVMのサポートです。EVM用のカスタムデータソースプロセッサを持つことは、EVMレベルでのフィルタリング（コントラクトメソッドやログのフィルタリングなど）ができることを意味し、データはABIでパラメータを解析するだけでなく、Ethereumのエコシステムに馴染みのある構造に変換されます。")]),t._v(" "),a("p",[t._v("カスタムデータソースは、通常のデータソースと併用することができます。.")]),t._v(" "),a("p",[t._v("サポートされているカスタムデータソースの一覧です。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("種類")]),t._v(" "),a("th",[t._v("サポートされているハンドラ")]),t._v(" "),a("th",[t._v("フィルタ")]),t._v(" "),a("th",[t._v("説明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ja/create/moonbeam/#data-source-example"}},[t._v("substrate/Moonbeam")])],1),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ja/create/moonbeam/#moonbeamevent"}},[t._v("substrate/MoonbeamEvent")]),t._v(", "),a("RouterLink",{attrs:{to:"/ja/create/moonbeam/#moonbeamcall"}},[t._v("substrate/MoonbeamCall")])],1),t._v(" "),a("td",[t._v("See filters under each handlers")]),t._v(" "),a("td",[t._v("Provides easy interaction with EVM transactions and events on Moonbeams networks")])])])]),t._v(" "),a("h2",{attrs:{id:"ネットワークフィルタ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ネットワークフィルタ"}},[t._v("#")]),t._v(" ネットワークフィルタ")]),t._v(" "),a("p",[a("strong",[t._v("ネットワークフィルタは、マニフェスト仕様v0.0.1にのみ適用されます。")]),t._v(".")]),t._v(" "),a("p",[t._v("通常、ユーザーはSubQueryを作成し、それをテストネットとメインネットの両方の環境で再利用することを想定しています。（例：PolkadotやKusamaなど） ネットワーク間では、さまざまなオプションが異なる可能性があります。(インデックス開始ブロックなど) したがって、ユーザーがデータソースごとに異なる詳細を定義できるようにすることで、1つのSubQueryプロジェクトを複数のネットワークで使用することができます。")]),t._v(" "),a("p",[t._v("各ネットワークで実行するデータソースを決定するために、 "),a("code",[t._v("filter")]),t._v(" を "),a("code",[t._v("dataSources")]),t._v(" に追加できます。")]),t._v(" "),a("p",[t._v("以下は Polkadot と Kusama ネットワークの異なるデータソースを示す例です。")]),t._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"v0.0.1"}},[t._v(" ```yaml --- network: endpoint: 'wss://polkadot.api.onfinality.io/public-ws' #Create a template to avoid redundancy definitions: mapping: &mymapping handlers: - handler: handleBlock kind: substrate/BlockHandler dataSources: - name: polkadotRuntime kind: substrate/Runtime filter: #Optional specName: polkadot startBlock: 1000 mapping: *mymapping #use template here - name: kusamaRuntime kind: substrate/Runtime filter: specName: kusama startBlock: 12000 mapping: *mymapping # can reuse or change ``` ")])],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);