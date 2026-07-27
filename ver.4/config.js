/* =========================================================================
 * AREA DASHBOARD 設定ファイル (config.js)
 * -------------------------------------------------------------------------
 * このファイルは index_redesigned.html より前に読み込まれ、
 * ダッシュボードの初期設定を定義します。JSON データ本体は変更しません。
 *
 * ▼ 変更しても安全な項目
 *   - logo               : ヘッダーに表示する企業ロゴのパス（同一リポジトリ内）
 *   - step0.defaultIssueId  : STEP 0「Issue（顧客課題）」の初期選択 issue_id
 *   - step0.defaultTargetId : STEP 0「Target（対象者）」の初期選択 target_id
 *
 *   ※ defaultIssueId / defaultTargetId には、データ（master_issue.json /
 *      mart_index）に存在する id を指定してください。
 *      該当タイルが無い場合や null の場合は、初期選択なし（従来動作）になります。
 *      例）フィルタなしを既定にする場合はいずれも "NOFILTER"
 * ========================================================================= */
window.DASHBOARD_CONFIG = {
  // 企業ロゴ（同一リポジトリ内に配置した PNG のパス）
  logo: "04_obayashi_c.png",

  // STEP 0 の初期選択（デフォルト）
  step0: {
    defaultIssueId:  "NOFILTER",  // Issue「顧客課題」の初期選択
    defaultTargetId: "NOFILTER"   // Target「対象者」の初期選択（Issue と同じロジックで適用）
  },
  // STEP 1 の初期選択（デフォルト）
  // フィルタはかけず、指定した area_id を「対象エリア」として選択済みの状態で開く
  step1: {
    defaultAreaId: "A0045"   // 例: "AREA_001"  対象エリアとして初期選択する area_id
  }
};

