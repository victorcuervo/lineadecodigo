---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGXE5RNO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhkr5M0rQWbtdtxiu4sERLpDXQdWJ2AZnw8NTwQC6GGAiBbe6AXI7QJGeAo81Cjp1zRTIThS%2B9GQL5ugKptBkRZ3Cr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMMy2q1WaIcYeqnJq2KtwDye%2BPdWms0sbQ7xpc14hrI8KFesHFITmx8nxDiibcscNSnSSQGk38smEVha3nAD45o7RoBYd9TkVYHpWiSIxYZuju0EhFvj6O3qdvb904Ss8Oj5PRioytOrYoS%2B271DTCC1%2BT%2FWJQBCk7uRSKmhkAsJiTtStAlhPO192VVSSr00qwkMS%2B8bKMLiIxgYn4813ZUrfx0PhcpC4Btj1VOmh7MCJWruqYniaRntCLFxK3JgrlcoGQEknonjLtvhnqiK0S%2F5uMs2T17FZroSnQw2J%2F%2BWN8M4SPC2KzBizqYC0KjTSutRID5Wm83Qe%2FV%2BUsIkH7PjtRq8Zqfo4RL96WbeV85kmS25oo7wi4Eq6n%2BopleXtyXPh%2B4muqCaTQ53XkNxCdVWG956d8VDuYZhgWsm7s7BD6PUlx4hgOr1i33ZjOR3kW8b4SSEudgTNVo9NKKk0SJY8jW6o2V8CKB8lGaYujibSwem5dgOFdgDtuYnGDbcPyodLuak35jOttW73O9ZrUyUiOMM4n6EBsk1Pmgkbir0Qol2Gd8MzL%2BJT4gdLh%2FclZ2n3lU7BU2Pb%2BqzZKkHeXn77AGpxmJphX08T5cfTzw%2FhBDxCZvf1Mho9BKNPKByEFHVzUxwLypKUEj2gwh8bNyQY6pgGCQM0N%2FDkimcgcWO5yBjWmcSojG1smtlVVimvRnXKwKw8DJP5%2Fkbskzx1k9p3OHVOzv1PyLwtRM1Ga28GRfZaI1%2FOrNknbCjNvvMUCduVmiQeYcD%2FSe1EyxrijGVYRyC4dLlonACtVDL3BiV6oRkh%2BBf4idDHcQ8O58df5I95jfzGCAsSMuPZPw2yb51ODBC5%2Boh%2B4mGgFHpTXDU4bOgY%2BQxzugYgp&X-Amz-Signature=6fd2e14e3161441f5303e190ebc38ea136cd3e4865a0ba3f3cbfb7d0f65c61b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGXE5RNO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhkr5M0rQWbtdtxiu4sERLpDXQdWJ2AZnw8NTwQC6GGAiBbe6AXI7QJGeAo81Cjp1zRTIThS%2B9GQL5ugKptBkRZ3Cr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMMy2q1WaIcYeqnJq2KtwDye%2BPdWms0sbQ7xpc14hrI8KFesHFITmx8nxDiibcscNSnSSQGk38smEVha3nAD45o7RoBYd9TkVYHpWiSIxYZuju0EhFvj6O3qdvb904Ss8Oj5PRioytOrYoS%2B271DTCC1%2BT%2FWJQBCk7uRSKmhkAsJiTtStAlhPO192VVSSr00qwkMS%2B8bKMLiIxgYn4813ZUrfx0PhcpC4Btj1VOmh7MCJWruqYniaRntCLFxK3JgrlcoGQEknonjLtvhnqiK0S%2F5uMs2T17FZroSnQw2J%2F%2BWN8M4SPC2KzBizqYC0KjTSutRID5Wm83Qe%2FV%2BUsIkH7PjtRq8Zqfo4RL96WbeV85kmS25oo7wi4Eq6n%2BopleXtyXPh%2B4muqCaTQ53XkNxCdVWG956d8VDuYZhgWsm7s7BD6PUlx4hgOr1i33ZjOR3kW8b4SSEudgTNVo9NKKk0SJY8jW6o2V8CKB8lGaYujibSwem5dgOFdgDtuYnGDbcPyodLuak35jOttW73O9ZrUyUiOMM4n6EBsk1Pmgkbir0Qol2Gd8MzL%2BJT4gdLh%2FclZ2n3lU7BU2Pb%2BqzZKkHeXn77AGpxmJphX08T5cfTzw%2FhBDxCZvf1Mho9BKNPKByEFHVzUxwLypKUEj2gwh8bNyQY6pgGCQM0N%2FDkimcgcWO5yBjWmcSojG1smtlVVimvRnXKwKw8DJP5%2Fkbskzx1k9p3OHVOzv1PyLwtRM1Ga28GRfZaI1%2FOrNknbCjNvvMUCduVmiQeYcD%2FSe1EyxrijGVYRyC4dLlonACtVDL3BiV6oRkh%2BBf4idDHcQ8O58df5I95jfzGCAsSMuPZPw2yb51ODBC5%2Boh%2B4mGgFHpTXDU4bOgY%2BQxzugYgp&X-Amz-Signature=2313f6e901177b9dfd1b1506ecbd7651978d73bb61e8bfde7704fd310e46f35f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

