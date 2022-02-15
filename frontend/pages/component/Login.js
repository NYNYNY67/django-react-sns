// インポート
import React, {useReducer} from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { withCookies } from "react-cookie"
import axios from "axios"
import Avator from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from '@material-ui/core/Typography'
import Container from "@material-ui/core/Container"
import CircularProgress from '@material-ui/core/CircularProgress'

// 画面操作の状況を細かく分けて画面状態のモードを定義
const START_FETCH = "START_FETCH"  // ボタンクリック→API実行中
const FETCH_SUCCESS = "FETCH_SUCCESS"  // API実行完了タイミング
const ERROR_CATCHED = "ERROR_CATCHED";    // API実行失敗
const INPUT_EDIT_LOG = "INPUT_EDIT_LOG";  // ログインフォームの編集中
const INPUT_EDIT_REG = "INPUT_EDIT_REG";  // 新規登録フォームの編集中
const TOGGLE_MODE = "TOGGLE_MODE";        // ログイン／新規登録の切り替えタイミング


// CSSスタイルをJSで定義
const useStyles = makeStyles((theme) => ({
  paper : {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar :{
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  span: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "fuchsia",
    marginTop: 10,
  }
}))

const initialState = {
  isLoading: false,
  isLoginView: true,
  error: "",
  CredentialsLog: {
    username: "",
    password: "",
  },
  credentialsReg: {
    email: "",
    password: "",
  }
}

// 画面状態変更用の関数
const loginReducer = (state, action) => {
  switch (action.type) {
    case START_FETCH: {
      return {
        ...state,         // initialStateを全部展開するという意味
        isLoading: true,
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case ERROR_CATCHED: {
      return {
        ...state,
        error: "Username or password is not correct!",
        isLoading: false,
      };
    }
    case INPUT_EDIT_LOG: {
      return {
        ...state,
        credentialsLog: {
          ...state.credentialsLog,
          [action.inputName]: action.payload,
        },
        error: "",
      };
    }
    case INPUT_EDIT_REG: {
      return {
        ...state,
        credentialsReg: {
          ...state.credentialsReg,
          [action.inputName]: action.payload,
        },
        error: "",
      };
    }
    case TOGGLE_MODE: {
      return {
        ...state,
        isLoginView: !state.isLoginView,
      };
    }
    default:
      return state;
  }
 };

const Login = (props) => {

  // const定義したCSSを取り込み
  const classes = useStyles();

  // 画面の状態変数・関数の定義
  const [state, dispatch] = useReducer(loginReducer, initialState)


  // --------------------------- ここまで編集した --------------------------- //
}
