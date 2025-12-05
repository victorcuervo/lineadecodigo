---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAB4DQG3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDz7lqOnfsDHkClcboSUKe8evNYQ60JoYIjgG0pcklmgAiAvgIr4albnVDd5cb0Z5SjGKFQUXPBV3EC%2Fe9Px8vlwgir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMjjFpRa0h1JBQBCWpKtwDFK0Yu5NKNLlYrvPwMbBcPahmrJf7GnKHh8lN%2ByDS1asSF3CIBauPtO75TvQ4BpP%2FpFE%2Fr5Ov33eKLpRrrzXlEi7Z%2Bizlt5vXadsR1KVeHTO%2FGVZxBS0ynWkqkMvOWzBa32fOL5C4JsniuF%2FiPq1Ft7yXWpUk8I%2FuKbdGoRNgyD%2Bvkd2LlqCIV2udAeY7cjhsAHAT7JvqNnKOmMMrBd1a5fvWtFx2Qx9gBRxsVUQsVSTG8J3I2V23OmPpskKj8DC0PlgKfSDvSw37aS5Bs7%2BVkhjh%2FKxnoA71g4s%2Fr54OZGc%2FYRuCX6yYlNe%2BXMh627QRKXH0%2BF0bEvAT3O3%2B4FnaXc%2Fa3CtD44d4flVWg%2BzhdlV6RaXNJ1Bdy1UyAxE4VcCCpJL5kF6WuQ2jmcKKg67iWc%2Fc2nlSSL8wdjlDqPbAqAXWJmwRwRODd5fii%2BU4tfZsMERvfx55aPb1cIiFRT28Cc8OMpRf66%2BCmuuXNbrEHTE4zdgyszSy6UgPpys61t48Ns3CugarGG90trZvagGMSsI4FUtUcSCT3Pgwf4Vod4QPZWtSeMFyodzJMQrJSfkfV1Wp6yFxECzd9yt5LG7leNqeen%2F5qs9IFFKmaZ5Ye%2F1Ef0KtZ%2FHhTj%2BiIA0wjvHLyQY6pgERvUXJehZoZY72vBbYUIuqvZqjdwYUMKd%2Fhe%2Bogs%2F5Hv40%2FE0JSLipcOJC6pLCo52gmxm6EtUjOhG4opiSr47v%2BbwzR9P2GBufTVZe4yP7d1u130nrQ7OdeK2aM7iy1ZaEvlM0u%2BDMYs2K9UPpfw1ySg7jM%2BGTbhheUkgu72u8Eblth%2B8o0CNKreMECArx1a78asrLSaAZP5UzDMBqr3PvYvNiG2uI&X-Amz-Signature=02ce78facbcf0ee99a8d474387e94d1d6c889488e219935c0ecb042a05296983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAB4DQG3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDz7lqOnfsDHkClcboSUKe8evNYQ60JoYIjgG0pcklmgAiAvgIr4albnVDd5cb0Z5SjGKFQUXPBV3EC%2Fe9Px8vlwgir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMjjFpRa0h1JBQBCWpKtwDFK0Yu5NKNLlYrvPwMbBcPahmrJf7GnKHh8lN%2ByDS1asSF3CIBauPtO75TvQ4BpP%2FpFE%2Fr5Ov33eKLpRrrzXlEi7Z%2Bizlt5vXadsR1KVeHTO%2FGVZxBS0ynWkqkMvOWzBa32fOL5C4JsniuF%2FiPq1Ft7yXWpUk8I%2FuKbdGoRNgyD%2Bvkd2LlqCIV2udAeY7cjhsAHAT7JvqNnKOmMMrBd1a5fvWtFx2Qx9gBRxsVUQsVSTG8J3I2V23OmPpskKj8DC0PlgKfSDvSw37aS5Bs7%2BVkhjh%2FKxnoA71g4s%2Fr54OZGc%2FYRuCX6yYlNe%2BXMh627QRKXH0%2BF0bEvAT3O3%2B4FnaXc%2Fa3CtD44d4flVWg%2BzhdlV6RaXNJ1Bdy1UyAxE4VcCCpJL5kF6WuQ2jmcKKg67iWc%2Fc2nlSSL8wdjlDqPbAqAXWJmwRwRODd5fii%2BU4tfZsMERvfx55aPb1cIiFRT28Cc8OMpRf66%2BCmuuXNbrEHTE4zdgyszSy6UgPpys61t48Ns3CugarGG90trZvagGMSsI4FUtUcSCT3Pgwf4Vod4QPZWtSeMFyodzJMQrJSfkfV1Wp6yFxECzd9yt5LG7leNqeen%2F5qs9IFFKmaZ5Ye%2F1Ef0KtZ%2FHhTj%2BiIA0wjvHLyQY6pgERvUXJehZoZY72vBbYUIuqvZqjdwYUMKd%2Fhe%2Bogs%2F5Hv40%2FE0JSLipcOJC6pLCo52gmxm6EtUjOhG4opiSr47v%2BbwzR9P2GBufTVZe4yP7d1u130nrQ7OdeK2aM7iy1ZaEvlM0u%2BDMYs2K9UPpfw1ySg7jM%2BGTbhheUkgu72u8Eblth%2B8o0CNKreMECArx1a78asrLSaAZP5UzDMBqr3PvYvNiG2uI&X-Amz-Signature=8ec8acd9ef2621c28c70fdce1a9cf4749aa0dccd59a45ec720fe7e7ce0b1ebda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

