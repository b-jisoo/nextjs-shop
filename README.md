# **Next-Shop**

# 😃 개요

<a href="http://ec2-3-36-126-19.ap-northeast-2.compute.amazonaws.com/">Next-Shop</a>은,

- 누구나 쉽게 등록된 상품을 볼 수 있습니다.
- 장바구니를 이용하여 여러 상품을 담을 수 있습니다.
- 사용자는 원하는 카테고리만 골라 볼 수 있습니다.
- 판매자는 어드민 페이지에서 쉽게 상품을 등록, 수정, 삭제를 할 수 있습니다.
- 장바구니 페이지에서 등록된 상품을 확인, 수량을 변경, 장바구니에서 삭제를 할 수 있습니다.

- Next-Shop은 AWS EC2 서버를 통해 배포되어 실제 이용 가능합니다.

<br>

# 😄 개발 목적

<a href="https://www.youtube.com/watch?v=HYgKBvLr49c">컴포넌트, 다시 생각하기</a> 해당 영상을 보고 영감을 받아 Next-Shop을 개발하였습니다. 이전부터 고민하던 ‘리액트를 리액트 답게 쓰는 방법’에 대해여 해당 영상을 통해 GraphQL를 도입하여 컴포넌트 간에 의존성을 줄이고, 컴포넌트 재사용에 관한 기준점을 제시해주어 이 프로젝트를 만들어보게 되었습니다.

<br>

**위에서는 ID만 받고, 스키마는 전역 상태에서 받자**

![컴포넌트 1](https://user-images.githubusercontent.com/71222288/211179745-a7c79b3d-4f1c-4c07-afca-36ba88f9de94.PNG)

위의 그림과 같이 루트 컴포넌트에서 데이터 스키마를 받게되면, 자식 컴포넌트와 강한 의존성이 생기게 됩니다. 하지만 개선한 방법으로 루트 컴포넌트에서 자식 컴포넌트에게 id값만 넘겨주고, 그 id값을 통해 해당 데이터를 받아올 수 있게 된다면, 강한 의존성을 끊어낼 수 있습니다. 이 프로젝트는 컴포넌트 간에 의존성을 끊어내는 것을 목적으로 진행해 보았습니다.

<br>

## ⚒️ 기술 스택

<h2>프론트 엔드</h2>

![Next](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Apollo](https://img.shields.io/badge/Apollo-311C87?style=for-the-badge&logo=Apollo-Graphql&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=GraphQL&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=Tailwind-CSS&logoColor=white)

<h2>백엔드</h2>

<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
<img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-8cbe68?style=for-the-badge&logo=MongoDB&logoColor=white">
<img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">

<br>

# ✍️ 주요 기능

**Home 페이지, Product 페이지**

- 등록된 제품을 장바구니에 담을 수 있습니다.

- 제품을 클릭하여 상세한 내용을 확인할 수 있습니다.

- 원하는 카테고리를 선택하여 분류하여 볼 수 있습니다.

- 장바구니 담긴 제품의 수량을 확인할 수 있습니다.

**Admin 페이지**

- 판매할 상품을 등록, 수정, 삭제할 수 있습니다.

- 어드민 페이지에서도 등록된 상품을 확인할 수 있습니다.

**장바구니 페이지**

- 장바구니에 담긴 상품을 볼 수 있습니다.

- 상품의 수량을 변경하거나, 삭제할 수있습니다.

- 장바구니에 담긴 상품의 결제 정보를 확인할 수 있습니다.

<br>

**HomePage ⬇**

<img style="width:500px" src="https://user-images.githubusercontent.com/71222288/210417047-9cbf5935-4f1b-416e-92be-434ab42b0de6.PNG"/>

**ProductPage ⬇**

<img style="width:500px" src="https://user-images.githubusercontent.com/71222288/210417055-a1f84161-eb4a-4f6a-943a-660d346c8325.PNG"/>

**AdminPage ⬇**

<img style="width:500px" src="https://user-images.githubusercontent.com/71222288/210417039-cb38ed8b-449e-4c1f-ad9b-decc722ede64.PNG"/>

**AdminPage2 ⬇**

<img style="width:500px" src="https://user-images.githubusercontent.com/71222288/210417042-12466e49-3fbe-46fd-a62c-207581776bbe.PNG"/>

**장바구니 페이지 ⬇**

<img style="width:500px" src="https://user-images.githubusercontent.com/71222288/210418118-0ad06c64-40ca-4aba-99e7-d27af9197418.PNG"/>

<br>

# ✨ 아키텍처

![aki](https://user-images.githubusercontent.com/71222288/210663553-442b8dd4-5de3-44f4-80f4-0bea468951a1.PNG)
