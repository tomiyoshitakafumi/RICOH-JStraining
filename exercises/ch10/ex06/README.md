﻿importは関数宣言と同じように上に巻き上げられるため11234と予想した。
しかし結果は1234となった。これは同じものをインポートしても評価結果がキャッシュされていることが予想される。
(intellijのエディタでは同じインポートは保存してもフォーマッタが働き削除された。)