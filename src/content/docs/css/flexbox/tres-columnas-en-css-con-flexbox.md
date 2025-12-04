---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAPIISMG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCNcQEXMP5D4Fska9jObXMntKtv9BvCmgYzAlrqLxrroQIhAON%2BDZfbUGP96A8X%2BUgdxrgxQs4ckfH69vdAmTxHBbwFKv8DCEEQABoMNjM3NDIzMTgzODA1Igwv8n%2FzXmlU5fpy3Nsq3AP%2BFGShkByGCczEq%2FtrtRoSm8QQV%2F6gUwuXzNExu0I2B%2FzxeoFJ05cyJbT0zFk6yZbM3enis25So8pfG5W8S9ySziy28HH5w%2FsjPjGWQ99nISLel9xL6wq57hQ2IdvTG7uqt%2BTzAb3wvzmjAC8GWBXm7EnQCjfm5c0F2pFuN%2B%2Fd9z5aGLoGnEAePBQc4S9M1WrWH24WUrRv3n4%2B8KaBTso9qA0L4KAWEvaXbsrd6ZibTYa5YcVr1UKHD%2BCKMFphe6zxLb1JjlCTYEdKnRUucUn1RvbtnOuNPz%2BeIF9w%2FOuJIlvfewLjGvr%2BRAHX7ncF8NZIEVLqVP3skLp%2BQDx7CYXisBVUBnW4PxqnQKFPDMySRbd5lOxSIhB7QTzKrWR7%2FUAJsSLrVtUPHXMCmc6HcNzdDvFEn%2FOrTYAis66iALpv1mdx942speVMH1RK0exLbqJRxz%2BQjlziY2i6FHVc5utTOyFbAv9Q0HYkX3fchedqPpWEyUUe9z7gWDgd1YU7TWadhhe5AKhSR%2FLdIi8xEVXVHHesFlx27bp%2FzY2U%2BrxHBGfvCFlojFMUdkIs5wAiqCBO%2FBbaJnZMy7finW9YCmMKfgOfoXkMht%2Bac5v6arSfm22gCd0mWfAiYXYrUTDzhcXJBjqkAdmn5HEN2O4FWCRXuelhW6Er4scCpzB9%2B6O%2FQy5tGUNU%2BaUhDj%2FY1RV%2BPD0z%2FYOuyfc%2FyiLQlCgE4CU1qlFjqoqGPoMhYxQ2awN68Cx4f982JrdmcZkmdN7%2B0c%2BW0xjXQe2kxm5%2B1%2Bz6WI5DD%2FK4MgKY1Kp%2BV%2BQ2LkAQ8iOQQ%2Bj0F3Mf5irBi%2F%2ByQgaHv47B%2B7jirNO8lmPYWF2fquq5HzPxIBgv&X-Amz-Signature=497ced3a3dca8e8e9a2d8bb2eb213b9f78a5b39537b1731d60e33a45d01c0a60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAPIISMG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCNcQEXMP5D4Fska9jObXMntKtv9BvCmgYzAlrqLxrroQIhAON%2BDZfbUGP96A8X%2BUgdxrgxQs4ckfH69vdAmTxHBbwFKv8DCEEQABoMNjM3NDIzMTgzODA1Igwv8n%2FzXmlU5fpy3Nsq3AP%2BFGShkByGCczEq%2FtrtRoSm8QQV%2F6gUwuXzNExu0I2B%2FzxeoFJ05cyJbT0zFk6yZbM3enis25So8pfG5W8S9ySziy28HH5w%2FsjPjGWQ99nISLel9xL6wq57hQ2IdvTG7uqt%2BTzAb3wvzmjAC8GWBXm7EnQCjfm5c0F2pFuN%2B%2Fd9z5aGLoGnEAePBQc4S9M1WrWH24WUrRv3n4%2B8KaBTso9qA0L4KAWEvaXbsrd6ZibTYa5YcVr1UKHD%2BCKMFphe6zxLb1JjlCTYEdKnRUucUn1RvbtnOuNPz%2BeIF9w%2FOuJIlvfewLjGvr%2BRAHX7ncF8NZIEVLqVP3skLp%2BQDx7CYXisBVUBnW4PxqnQKFPDMySRbd5lOxSIhB7QTzKrWR7%2FUAJsSLrVtUPHXMCmc6HcNzdDvFEn%2FOrTYAis66iALpv1mdx942speVMH1RK0exLbqJRxz%2BQjlziY2i6FHVc5utTOyFbAv9Q0HYkX3fchedqPpWEyUUe9z7gWDgd1YU7TWadhhe5AKhSR%2FLdIi8xEVXVHHesFlx27bp%2FzY2U%2BrxHBGfvCFlojFMUdkIs5wAiqCBO%2FBbaJnZMy7finW9YCmMKfgOfoXkMht%2Bac5v6arSfm22gCd0mWfAiYXYrUTDzhcXJBjqkAdmn5HEN2O4FWCRXuelhW6Er4scCpzB9%2B6O%2FQy5tGUNU%2BaUhDj%2FY1RV%2BPD0z%2FYOuyfc%2FyiLQlCgE4CU1qlFjqoqGPoMhYxQ2awN68Cx4f982JrdmcZkmdN7%2B0c%2BW0xjXQe2kxm5%2B1%2Bz6WI5DD%2FK4MgKY1Kp%2BV%2BQ2LkAQ8iOQQ%2Bj0F3Mf5irBi%2F%2ByQgaHv47B%2B7jirNO8lmPYWF2fquq5HzPxIBgv&X-Amz-Signature=99055da51ae2cd72d564f88e2f742a0512497496ca413e0ef1c1166166e98e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

