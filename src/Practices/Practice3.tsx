export const Practice3 = () => {
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    return total;
  };
  const onClickPracice = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習問題:変数の型指定</p>
      <button onClick={onClickPracice}>練習問題3を実行</button>
    </div>
  );
};
