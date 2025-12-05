---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUS5F4F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyW4tLPzLjTlC33iO7Bync0JjXKzP%2Br5xwanmokGwWvAiAfxreJjuwpA0giNLc88ymA7qRnov9yuyeZ2urxEVi7jCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMl%2Bkh%2BsF%2Beo3fx2WeKtwDKhUTcr38R1j5cxBxs%2B7c5JIw394rF6B9reXMSkNApo2H0I1Cp3Wbzf8qAQMxS1zwDQbG%2BtwqR%2BswHC3cBtw6nqNeG%2BQM69X4buTCr%2FXa6fh8sGPmg%2F1fayUQpPaRhLknCjmssAMzc7pek3ezTDAKHfSm0m4bz2%2BqEUGaLDCbTOk3vRnART3vpxCIW7%2F01mTakfeRpPofv7Bidq4dM%2BJ2ayUqK7nU5UG%2F8b0uWsLQ8fZUcT%2B3jnSunVvzoe%2FgaJOdJEtZt0AHwljVtIguTgVxNnM9Wq%2BxKFEw%2BDxwGd12cNKO98zWj2er8JsnVCJcl0vQvOJjLr1wDmfF1x63ftx3UIAYMmv7SNHN4IbO8UjWXCHK58RZCVQync1Ux%2FPZV9w54OnDHOvPZO5qrBau0T9HkcXgtcbbrw4%2FxVIL2i2GxKHgQ7B3K%2F0Gf8FJ6mDszt4XgOk%2FmezJe%2B4M5MibNLv0eD5etTsNeRRzcOx3KWx9ZzzUu%2FJ5sLHkunue8g%2BcMSu3c9m1GvxKmvC%2BN2LKpynlCPLzms8k6T%2FQXLDAzXIva0Cffd7HhpZXRy13JqULjqwouatpvSeiN2r4kRxNqKu8aBf26serItRtBH4ySjaA%2BJRqRkfgF3PR4TR75FQw6qrJyQY6pgFD9qGcPsrNDQqQd6vmWCGTnQN2xpJMttijHiWayHDXpFIn9BEmz74mEiqrd28FQCd9ajLlI4JE8exgbQ8BV5XTG7sziu7%2Btjwe%2B6MfSymx7R%2B3h90iJPSbuU849YjweXm4t%2Fts5qLfnD0Fguo9S5pPYvGS%2FM%2BCIr5WJIMmXJhu0Dklzr356q6U01e7xBUFfJC0gx%2Bnm0YsktTdqxsuJ8nab%2FARv0hl&X-Amz-Signature=eb01dc1e725f138e803fe1e8f582444026ec054036fd0ce657082f3006419090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUS5F4F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyW4tLPzLjTlC33iO7Bync0JjXKzP%2Br5xwanmokGwWvAiAfxreJjuwpA0giNLc88ymA7qRnov9yuyeZ2urxEVi7jCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMl%2Bkh%2BsF%2Beo3fx2WeKtwDKhUTcr38R1j5cxBxs%2B7c5JIw394rF6B9reXMSkNApo2H0I1Cp3Wbzf8qAQMxS1zwDQbG%2BtwqR%2BswHC3cBtw6nqNeG%2BQM69X4buTCr%2FXa6fh8sGPmg%2F1fayUQpPaRhLknCjmssAMzc7pek3ezTDAKHfSm0m4bz2%2BqEUGaLDCbTOk3vRnART3vpxCIW7%2F01mTakfeRpPofv7Bidq4dM%2BJ2ayUqK7nU5UG%2F8b0uWsLQ8fZUcT%2B3jnSunVvzoe%2FgaJOdJEtZt0AHwljVtIguTgVxNnM9Wq%2BxKFEw%2BDxwGd12cNKO98zWj2er8JsnVCJcl0vQvOJjLr1wDmfF1x63ftx3UIAYMmv7SNHN4IbO8UjWXCHK58RZCVQync1Ux%2FPZV9w54OnDHOvPZO5qrBau0T9HkcXgtcbbrw4%2FxVIL2i2GxKHgQ7B3K%2F0Gf8FJ6mDszt4XgOk%2FmezJe%2B4M5MibNLv0eD5etTsNeRRzcOx3KWx9ZzzUu%2FJ5sLHkunue8g%2BcMSu3c9m1GvxKmvC%2BN2LKpynlCPLzms8k6T%2FQXLDAzXIva0Cffd7HhpZXRy13JqULjqwouatpvSeiN2r4kRxNqKu8aBf26serItRtBH4ySjaA%2BJRqRkfgF3PR4TR75FQw6qrJyQY6pgFD9qGcPsrNDQqQd6vmWCGTnQN2xpJMttijHiWayHDXpFIn9BEmz74mEiqrd28FQCd9ajLlI4JE8exgbQ8BV5XTG7sziu7%2Btjwe%2B6MfSymx7R%2B3h90iJPSbuU849YjweXm4t%2Fts5qLfnD0Fguo9S5pPYvGS%2FM%2BCIr5WJIMmXJhu0Dklzr356q6U01e7xBUFfJC0gx%2Bnm0YsktTdqxsuJ8nab%2FARv0hl&X-Amz-Signature=3135daa9272e68b556538f740c44cf2b0d5b31b5070d1e27a7a054e122449095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

