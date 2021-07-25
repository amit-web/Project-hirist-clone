import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Cources = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    CourcesData();
  }, []);
  const RightSide = styled.div`
    height: auto;
    width: 320px;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    background-color: white;
    border-radius: 15px;
    padding: 0px 0px 0px 10px;
    display: inline-end;
    padding: 15px 0px 0px 10px;
  
  `;

  const Image = styled.div`
    height: 40px;
    width: 50px;
    border: 0.2px solid grey;
    border-radius: 10px;
    background-color: white;
    margin-top: 0px;
    
    img {
      border-radius: 10px;
    }
  `;
  const Name = styled.div`
    p {
      font-size: 13px;
      margin-top: 0px;
      overflow: hidden;
    }
  `;
  const Main = styled.div`
    display: flex;
    gap: 20px;
    padding: 10px 20px 10px 10px;
  `;
  const GetApp = styled.div`
    height: 200px;
    width: 320px;
    background-color: white;
    margin-top: 20px;
    border-radius: 10px;
    padding: 10px 0px 10px 20px;
  `;
  const Icon = styled.div`
    display: flex;
    gap: 15px;
    div {
      margin-top: 10px;
    }
    h6{
      font-weight: 550px;
      font-size: 16px;

    }
    p {
      font-size: 17px;
      margin-top: 0px;
    }
    img {
      margin-top: 10px;
    }
  `;
  const Mobile = styled.div`
    display: flex;
    margin-top: 20px;
    input {
      height: 30px;
      width: 100px;
      font-size: 16px;
      color: grey;
      border: 0.5px solid grey;
    }
    button {
      font-size: 16px;
      background-color: #e9630c;
      color: white;
      border: 0;
      padding: 5px 3px 5px 5px;
    }
  `;
  const Download = styled.div`
    p {
      font-size: 16px;
      color: grey;
      margin-top: 10px;
      margin-bottom: 8px;
    }
    div {
      display: flex;
    }
    img {
      height: 45px;
    }
  `;

  const CourcesData = async () => {
    let courcedata = await axios.get("http://localhost:8000/courcesdata");
    setData(courcedata.data);
  };

  return (
    <>
      <RightSide>
        {data.map((item) => {
          return (
            <>
              <Main>
                <Image>
                  <img height="40" src={item.url} alt="" />
                </Image>
                <Name>
                  <p>{item.name}</p>
                  <p>{item.cource}</p>
                </Name>
              </Main>
            </>
          );
        })}
      </RightSide>

      <GetApp>
        <Icon>
          <img
            height="40"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACoCAMAAABDlVWGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP/x6P/x6P/x6P/x6P/x6P/x6P/y6v/37P/x6PzZwv/y6P/w5+ljDPzUu/e4j+6AOOttG/7i0PSmdPGSVfrIqXvbDbUAAAAMdFJOUwCh28/D77JAGYDhYikgeFgAAAVrSURBVHja7Z3psqsgDICrosCUqoC+/6ueat1aqQUT0cyc/LlnOrf2MxuLJN5u//IvMBH8LpOiYFmaK5WnGSuKRN65uBSiTNiTzi05S+QFcJ+QmfKQTPITKblkKkDYObBCpipYMhnZCcSdqZ3C7vFYRZIrgORJHFReKLAUnARmBFTOFJqw41BFoVClOMhXZa6QJZdHWD1VB0jK0TOSOkhwcxXP1WGSIypVqkMFy1MFUwcLE1c3O6b5pYoiYPMnKpIkMM5CRZPi0mGEE1IiU1El20kqUhVZUkGDcx9pbLvvtj5Tpwi7cF4CZalEnSbJBcdN8GjK1aniPUMR+bmgubh2wAeHvr+DGlvrh6fo2hpcN/V30MqbcmCtMN3U30GrR7BUiG7qnUHNU5/atqWntLbTv0HLpv6Gb56cn787QHUfm7J03FmDZnz/KZPDks1o4rb3i8bhK/4Tqf0R/66+0mHIKbisqrvg+bzA6itmb+RvRVLzrqHSoR47kNalavXTgR1GKDcuGRBPG3Mm+6GOMsSOblDT637PPIpv56KVRqtAWWt0M2PxHWNnd/N1r9CmbifQHfICNVX/r6k3MxbbodAuF5XDHzUctOkSQ3eR7YzFgz20HG1UTW7VfVQHyhL0dd8rb/Dx0h8KHXN2jRBM/V2OGS1YpRshrweF2nk0gkV99RiMX63T7S+Viu//vx19Xs/5BJie6kGlZiR2iwibjdjhqu0iSIGg08BWb+bSJHRQel3MTh4KT/gLbwobnu4bP1APF20Wdw8FHQGrxc075B60UNKDH9WLgQQBdHQnHbJ8Ej4/gAk6avLXdUTIim7UKKbpKz+NrmZ7mxPmhY82kX30cwLNf6067Gd2hoLWcyZpAtYk22t568jOQFCz8HsbsMbf3hxZZucaB9SOs4fNWck67n/8wjh0tvOcHAZaPmbL6x/fClkkT5ORZjI+CLTfExj/sAEL51/bTdP15nkeCHS6X+vYHNhy0p8PFuxjnpNbOGi9dqWNBxCew9Jsq/7WTYkxcW6q96sqv8HJYx+nfXwkZoTlcr9L0Ybs7vjsiFbHrOt99vdk2A6efd/5wNCo1dbna4l/LH0ZBKCgnjJHU35t0Nw/6M8FncKeXx2UeyyXLgF6hzxQjAkqIU9oY4ImkEfeMUELaqDs6qAMMDBFBc2Cny2dBJoCRtCooLnfyu58UEUNlIzpyQQTmfREJuH/j/XYoGSmeWQmzmSWImQWd2SWy2Q2IK6+pcNAB4Ujgiagk8IRQSXoqHBEUH6D7JJFBBU3SDTFA81gx9njgUrYefZ4oDzgEeOpoMAT7dFAGbDmIhqoBBZdRAPle882L0Ch50dDlsq7bQ86lrnb8jsGp1igAlrJAjo/ujfm9yycIgXTHVzE9BXUVNZWBgnUdcY9wQF9leS4C23CQZOwg64BoFMVRoMCKuAVlm7QLlXqptHuIwPBoAVCSaAbVL+O63cH7DUCKEcoWnWCTmeL3UeXQ0ELjCpLJ+h8ylC7bB8KyjHKF79pdAYFa5ShFK46Qc2yAsJAQTlKabU7mLogqoyptPP4ahhogVNj6wY1U5GY64RYEOh2IWNA8aq7wqcdSHXr/RXP+R1mcWBP02V73biAMIsDgeWWg1e4P8Yttzy2gFXjFbDSKQkmU2R9VNn6A71snU4jADqtFcg0q6DT/oNOQxU6LWroNP2h00aJTGMqOq2+6DRPo9OOjk6DP0ItE+k0oaTT1pNOo1Q6rWcJNfOl0x6ZTsNpQi28CTVFv5FpM9+j0mjcj4VaxHlxB5GXS/SoNF7X8WLd8wKUVJ7yFhwar5SZYAm8pGd0Ai6T7Ptrj7JLvPZoiXv5F0n9C035A22W1exEBwXrAAAAAElFTkSuQmCC"
            alt=""
          />
          <div>
            <h6>Get the hirist app</h6>
            <p>
              We will send you a link, open it on your phone to download the app
            </p>
          </div>
        </Icon>

        <Mobile>
          <input type="text" placeholder="+91" />
          <input type="text" placeholder="Mobile number" />
          <button>Share App Link</button>
        </Mobile>

        <Download>
          <p>Download app from</p>
          <div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAAAxCAYAAAArzxBAAAAAAXNSR0IArs4c6QAAEfZJREFUeAHtnAewFcUShgfBgAkVRARBRDCLWcxiRMWIufRpWWDOVJlzKlOZc6AMGMqEAXMCs5jFLKACiggGRBETzPu/5vXWnr3nhnPPXrwPt6v2bJiZnt7Znp5Oc0IooBiBf2AEWtTTZ0uVd9SxiI656qlbFBcjwAjM1DFFxwQdM3SUhdoYr71q99fRT0cPHa11FIynQSig3hGA8abrGKVjiI5BOibpqBf6qAaNYnEUY5ADD8BL8FSd0Fel03QUTFeMQZ48AE/BWwmkl9ouejpCR4ektLgoRiC/EZgoVL10jANlWm8bqPuC6RiVAppiBOAteMzAJR5W60gdnWc9Ln6LEWiSERgvrD11THGJh+XaqUm6agDSjh07hnnmmacBNYsq/+cjAI915x2c8dqmrnk+W6Bfv37h+eefD2+99VZYaqmlqu5z0UUXDbvuums48sgjw4EHHhjWXXfdqnE2BMGSSy4Z7rvvvtC1a9eGVK+3zp577hkuv/zyeuvlVeGSSy4J++yzT17o6sIDv7WjgjMejuLZBnPPPXe4+uqrwwMPPBA222yz0KpVq/Dzzz9X3f8666wT7rrrrsB5yy23tOsHH3wwLLIImkTTwQILLBD69u0bFlpooVw66d69e9h4441zwVUOCUy23HLLJUX0lb5PCprmwnitVdPgrhvrueeeGw4//PCk0uuvvx5+/PHH5L6xF3PNNVcYN25c2G+//QxFp06dwssvvxxOOeWUcNxxx9mzdu3aGZP8+eef4bHHHgtTp04NSMr11lsvPPfcc4HnvXv3Dh9++GH4/vvvw9prrx1+//338NFHH9kk+fLLL+0MvUOHDg0zZswIMUarw9kB5l9rrbUMDzQALVu2DBtttFFYffXVw4QJE8IjjzwS/vjjDyubf/75AysAACPTZ20Ao6y88srhzTffDG+//bZV471WWmmlMHnyZKPvnXfeCYxrFrbaaqtwww03hJtvvjnccccdttpAA7SxWrRu3ToMGTIk/Pbbb9aU5zvttFNAqj/66KNh7NixWZRV3eNjydNvUysufZCoj6tvNAv04aKkU631K6Frm222iaNHj44avATfaaedFj/55BO779atWxRDRQ141EeP+nBx8cUXj+3bt4+TJk2Ka6yxRmzbtq3Rd+ihh1obfdgoRo5i6vjVV19ZG32Y+Msvv8SBAwdanWWXXTaKEeMqq6xi91rq46hRo+JVV11l5zPOOMOeL7zwwvHSSy+NJ510UnzjjTesnPeTfmv0iLnjLbfcEsWUcdiwYdYm+/7nnHNOpB64xQTR6Vx//fWNpieffDI+/vjjURMqajLVwKEJGKdNmxaHDx8e999/fyt/9tln45gxY+I999wTJ06cGK+77jp7LqaLYtJ47733xosvvjiOHDkyLr300jVwZmms577EnzfbGO/KK690nrPzBRdcUO2LJO3LMd4RRxwRv/jiC6tz7bXXRgaZgYGRGOwTTzzR7p944ok4YMCAuMMOOxizDBo0KHbo0MGul1hiiSh1wD700UcfbfXPOuusKN3UrmFoGG/FFVeMMBdMvMsuu1jZdtttF3/99dfYuXNnu5dki3369DEGgzmhRRI2/vTTT1ES2u6lhsTXXnvNrtMfcZlllolSSSJMxnPo/e677yI4mTSSUnHVVVe1Mtqff/75NXBIzbEJBF2O+6WXXkqYba+99orffvttpJ4ktl1DH5Pq448/jieccELSzttXeDbGm+1LrSv8Guhw0UUXBTGe6M4XxNEJQpY8SUG779GjR3jvvffseubMmUGMF8Q0di/GCxtssIEtcZrdthyLecJnn30W9HHDvPPOG2jDEgmIuQK6ahooX2yxxew5SzXw+eefB1SANm3a2HOMEDFFmD59uuGjjhjK+vjmm2+4DZKstkzbTeqH5e6vv/4ynDxm+WdZdt1Skiz88MMP1gI1geU7C3gPWrRoYXq1l3HvfdMOejkk3Qz/YYcdZkuxJkpA1cgD3LjIA1cJDgYaHQv9KQ2333570PIQNIOM6aiDzoNyW26g0m0bcs2AYawsuOCCpuuht2h5s6boPZtssokNqpbYsOaaayZ60NNPPx169eplHxzmQIfTUmp6DY35OOBG5wH8bDf68TIYUhIu9JaeCKBTaVkOkrph9913N7okhcOIESOMmcH76aefGvPRP7SjB/I8C+hX9COJZ0WSWjYRoNX75wxk6bOH+mFyUEcqRdIHfXl9yvyeCYvOe95555n+t/POOwctu46qqnPuEm/77bcP/fv3tw/ITGQWImUgWPpH0HIX+Oh8BNwGWhqClid7wfHjx5vCLv2lUUosCjmMjpHAB/z777+D9Bjrl1HCbYCxAJPRJ1Lu7rvvtgFEMmFZI92QxkgllH3qOvAuSByAD4LUApCwMBuAUn7ssccGDCgt22H55ZcPMBrPX3jhBTOqMGrmm28+Y0gmiPS9cNttt5lSDx18eMdnSP/3g1SSfhiQyAcffHBAgh9yyCFGk9Pg0p6xcMMljYPnvPeFF15ovlMMDd6D9wEwluib8ZNOZ24dvh19M54HHXSQSeQ0zmquq9bx0DNkKem9aweUZvQi9KG64Ouvv45i4Ip1CX3MqI9h+o5cElGzuAYOdBctqVZHA1ZSji4n69CeYaCkFWkxg92LUaxcEj3R28CJ/oWR4DjR13pLN5JzPHlGGboe/aMLdunSpYRG9DRZq6azuU7o+NJn+gK300qZVAGjQQxj/WlZLilPt6euVJ6ENmiVimDt+I5du3Y1HdjbyMcatTrY83Jj6vUaeM7PuIAYLaF18VLFZVheK6ywQslHa+CLFW0yE6qZjVt+jIe7IU/QEmFuAmZmMxu0gp7qmTofxmNJ+uCDD/Lku8Q/VjBdqSowh4xHPownKzHKUsqN8eRtN5/ZHDLIhYSsKSGN8aq2agk1YYXlBXfeeadZT9XiwyrDHUIoCcBqxO/VnAAf4h577GHJDLifsCYVZQmKPAQ5dc1abk70NgUtcGGjZichlTwBCdpYWtLt5BssIUvZHrngTfdRzbUC9VFx1RIa/ebVV18tsSq9HyxO+dma1Xs4bRWc85F4eTh9RXQC5XxPSWEFF2SLAPje8O4rTGUBcPe9VYAq96o4rm+66SajB98evjT8ZIoZhy222CLg6MbR64Dv8aijjrLUMXyDvNOcAo2WeMQ084Tddtut6hmNewddEZAj1+KgJCMoIlA1bn3wqnFcdtllRhsxZPyB9eEk0QEgtow/sb76zbw8H4nnsUu9bC6gQH+4//77q8KlYH2QM9YiEddff72FyUglQlp4ipJ3gH5Kn8RYlbFhkgfpSH2k+fvvvx8efvjhMGXKFG9ieuPWW29tcV1SiAg/7bjjjhaFIUIBHiUjJPWzF3Ic2yPionXlIRL5gRaiOwCSm0gMUQbCWUQ8HIgbE54jJAg9RIGIumRTo9B5oR19krQscKNnEpMmTcoBHITkVlttNXv07rvvWviwLnq9bSXnRks8hb1sNub1ow8clVdW1aw+/vjjjRwNvOFRPp7d4/bJ+gaRIGIuKyfzRMZNjVehnMwTDagdZG0A0EoWCpIoC6wE2b68PVkjgMJXlnLlz7NnHOi1AXR6fdKylMldoypSHjrEwEldIhYA0SGFBC3bhXslzCZ1Nt98c0sv43kaFPosGQfvv8LzLB1IjYBGMx4hKtJx8gRJJcuLE13JYDT0GuWb9oBiptZeOlJUjDUq1lg2R016ltVH2SePTUHxeMABB1guGu0A8udQ7qFD8deIkxvGIS+PD0L6Fblx3jdtTj311LL0E84j7w2AJsWLLQSWNRwUd7Z3eOqpp6yuJKThJJWLFDBoIdTlEwdmUoJtlOSLyvxJ8h4HDx6cGCWSYBGGJGwpqWgpW0xQHyu+J2ldwNlnn23vyvgpvmzPMHwITTb0e5Splw/joU+98sorRlSePyRpbrrppiWxzDIvUWMAkBIyIIwxPDGTGCpJjAA6XxYPAw/wQbRklpS79KRciQ1WhoTRUsWjqKB+ySQhluvjQV5bOp6a7nfDDTe0pFRD8r8fpJa2ApT0Txty4AAthzXKTj75ZCtjAmQTP72MCo6XfD0t1dYGBoOp0nTdeOONVkZCavo5cWy3wqtM3M2H8SDumGOOMWLz/mEGa79EyQCkB6PcNTMXQEKlFXFlY9hzpFM6mA8OZzzpMYlkcNwwkvLjrC1JEDxPM97pp59egz4Y1MElk+NLn5FoZDHLivXqJkWVAVKC040LEkdd6oKHhAAmKCC9uKQN5WRXu/Ryd1Ka8ZDsaXowdLR1wPDtu+++keQAkhU4uCYbG0B1Sber8NoYL5d8PNJmUJTzBnL800p9ffgxFFDyARR4FPxhw4bZTjYMC4C9Cq6s24PUjyRUiRuDIpRwT+pU1obV1tgnTnP2eGQBg8TdQm5IZOtwT/oVuYI44Uk6JWdPeqGlIkFnfcAmJsfPTr0ssP/CEzfZQASkaSddLQ1sM8WlA0g3NHpIluWANtxAgDKz7VzNT9WRCzrHsoVQLQnV0FLSFuuQvLxKgMH1DGesMnawOWgZtUsiGjChb5Lxcs58lHJAHhpQW3m2DfXdD9eQNlipDz30kG3UYbKw4WbbbbetN9LCu0jVse49ny5Li783kzILWdqwjB0fE5YE0zR4fel56ceNus6F8eiZfaBsm8tjfyz4br311noHnnppwC2CCwRJQkIqMz494NJfgvRGKyNR0xnKcdA2C6SK+9Y/lx7g9I8Ak2SBBE1/Thp7QwHHMTRraauRue04vF/ucW3AHEwy+swCya7gAtK0Z+v5PWnzOKcJ35E0+8wzz3hR7udcllqokpUWZG3lQiAfS7upKsKVXmaZkRzsESCj1w98bkDPnj0t9T7bAT4r6W8lj0n3JosYIHM3CzB4FsgOBlgJyklW/HMuWdJtiVCQnQ3gV3NwaUY7lmIHojAvvvii3RKp8bZeDu1sLQBQW+oDVA2YHyBrmjT4pgYUvmoUxqRtdheZZmhFgGsGd0Cl9LDTC8sO8C1/WRz44rB4gbSC7MYFz1HWMQiwiJVWHnFhAOzaIgUMnGnjgrJrrrnGrEN8ZG4V8tx3sGXpwNDB7YJhQV9YiWw7xJgC2KKZtobl4LXn/FxxxRU2PrwveMlYloS3ct6DGDXbNdkt5lYoWzkxRKiPceEuonJRInafYd0D2nBvO+Log+xojKa999674m+Tef/8rNo0YixGBocMYl6Qg49N2jv7PdmzqWU0arOLuSTwh1GHMxaVZmmjXgznr/vVYIw0TX6N64cPTj1S8N26dcZjvyp7cCmHJtwO0A6t6Wxo8PN+gPZ32HtQ19tQxlbKcg5kfHWSPub79Hf396cdDE6audPMWUupWb5en77Ym+t1YF5tGDJawQUjUgd8MvzMuvW6kvb2fryju4e8zM+S2Pa9fBz8vRgLJibj6HUbcTbGy03HEwEGeuEgJrDNMoRiENfya1nYiSXPAR2I7YQsEeghLK/yHQXt3fQqFZ0JESkiYJt1XJ/JIkDRRrdjN5c+oulh0OtAGIr/XZHz2Cxf6hByYkNQbVY76VZnnnlmkCQwa4/NQqQ1sbSJLx11csboYLsg4S3+aYDlETWBZY5xYjnPhqXQvdgYxRLOVkgs7bSCzyYqwmBiJLOQCa1hbYOLjUVpXRaVCDWGpb62NDGSFkjL4h8E2A3It4Imln/CgeXeK3nBCi9yW2rVbzWz4R9p6xIPidwQ+tMSjwhHQ9oUdRK+MInn2uMsf4FGp4BiBJp4BIzXnPHw/s5ydDVxr80RPeoAy0clVpy3aY7v04xpgscmQ5/reKN1PVZHNx7+2wCvPN54zg0BKdtBmS7mM6wkstIQ3HN4HXhsTPYd+RMT0l7/dToL8U/ilOk4aF3jIGlnqUZsymYzd111i7KEn+Ct5I9y0nEUXNzDdfwrpZ7eu4CmHQGWk946xtPNrEAfVyFM1YG7vI8O4kBpptRtAcUINGoEkHTYEAN0zAqL6CLNeLq19ZdC8p35/1aYzw0QXRZQjECDRwBDAicpe0qJIZYEfmuTagQM/6ODXCKCl0TPCwbUIBRQ7wgg4fgfW4yIoToG6zBLVucEamM8r4BEJPmqjY6C8XxUinNdIwDj8U/qE3Ug9QooRqD5jMB/Ac3AKDMzeVgUAAAAAElFTkSuQmCC"
              alt=""
            />
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </Download>
      </GetApp>
    </>
  );
};

export default Cources;