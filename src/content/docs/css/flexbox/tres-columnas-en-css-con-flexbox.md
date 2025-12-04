---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDARJXM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAczW054hO5Ldm71ME1vJKlU7z7ufbjaAOGscHBV89WSAiBBdpVIOWT0WOSwbRgfHOjNU4GuJFxq3fe71cTsqgyviyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMbc6tkAYPT6O0A2Z3KtwD8zreBliIaoqcLkxv2%2Fswh97sc6XOdaxujj8D45aIyIfaT%2BJ9b9%2BKNJ74VtNtsVmoWCD6jI7LuogTb1yhdSoum1s1HgcXTK%2B%2BDzfIGAjAcJH6XVtz102TsYTj0ZOWK8VeBru5bR2MBkZj%2BSfJZ6Uyt1de%2Fn3AZ%2BVTXMx48klowdpuWaac1v5MabQZw4csbi94Ls93eOHaBtMHh4fZcL1qsWZJGBF%2BM1gbfn%2BG7jBCNguPLCSYnMaxvwGhzlHjJmLCP74eqQxjJf9zlAbBQDXSkEtCZOBiugCbztjtc2Z%2BOIsSSetwklQ59OMmS6ltTzMgZtedDi19DG%2FwTnT19INYn59ryJ6KIcCRRdC%2FYssu7E9YZnI%2BJ6h2m9ziZuksgb7HX2M1JsYg3kr3QihlPu2xCvKP92gJ9%2BY3N8LqwgFcXmx80HJt5ccAZbo%2BqV6wqO%2FpTK9F%2BIBaWdLIIu2M92p8KF68Ih4zU2Q%2FzJ4NGkeBi9Al4vHWEcvLN%2BHYNKuoFzbNaHEBQm40wGlAtP3QWJvx2ylTQGTmsc9qK8D1m2rTALCddg4LQ%2Btcqjco%2BY2z5zLJhNlsN1Zv2HsHfOP%2BAE1vj%2BhQPR9Fg62hQRlY4NJfr%2BT2tkQgRUCPsIQ%2FLBQwtZDEyQY6pgH8yzYCn%2BbxDQb7z0rIOIFzvuKm7kK141A%2FPWQ3CWnioajXePabLSU9cJM8%2BKfXd6rKWm1HeqlCRo3TFvbK6oIvEbaF3%2F4uAiZzWLeJzIwMkrYYg5QX1oqUjESKqzAyIiQbRxpyVOcUn2PW4Nke65kslcZMUZBjSAAuVEc2nSg6szI5Xntp8rbSA22g%2BEC6s5aNwtYy56VtDcfUKj5iEPvVjr8xp1t%2F&X-Amz-Signature=79d76b84fceab6acfa46ef76a6420e3d29f872df9e7d6b4f22c5ac6557384d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDARJXM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAczW054hO5Ldm71ME1vJKlU7z7ufbjaAOGscHBV89WSAiBBdpVIOWT0WOSwbRgfHOjNU4GuJFxq3fe71cTsqgyviyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMbc6tkAYPT6O0A2Z3KtwD8zreBliIaoqcLkxv2%2Fswh97sc6XOdaxujj8D45aIyIfaT%2BJ9b9%2BKNJ74VtNtsVmoWCD6jI7LuogTb1yhdSoum1s1HgcXTK%2B%2BDzfIGAjAcJH6XVtz102TsYTj0ZOWK8VeBru5bR2MBkZj%2BSfJZ6Uyt1de%2Fn3AZ%2BVTXMx48klowdpuWaac1v5MabQZw4csbi94Ls93eOHaBtMHh4fZcL1qsWZJGBF%2BM1gbfn%2BG7jBCNguPLCSYnMaxvwGhzlHjJmLCP74eqQxjJf9zlAbBQDXSkEtCZOBiugCbztjtc2Z%2BOIsSSetwklQ59OMmS6ltTzMgZtedDi19DG%2FwTnT19INYn59ryJ6KIcCRRdC%2FYssu7E9YZnI%2BJ6h2m9ziZuksgb7HX2M1JsYg3kr3QihlPu2xCvKP92gJ9%2BY3N8LqwgFcXmx80HJt5ccAZbo%2BqV6wqO%2FpTK9F%2BIBaWdLIIu2M92p8KF68Ih4zU2Q%2FzJ4NGkeBi9Al4vHWEcvLN%2BHYNKuoFzbNaHEBQm40wGlAtP3QWJvx2ylTQGTmsc9qK8D1m2rTALCddg4LQ%2Btcqjco%2BY2z5zLJhNlsN1Zv2HsHfOP%2BAE1vj%2BhQPR9Fg62hQRlY4NJfr%2BT2tkQgRUCPsIQ%2FLBQwtZDEyQY6pgH8yzYCn%2BbxDQb7z0rIOIFzvuKm7kK141A%2FPWQ3CWnioajXePabLSU9cJM8%2BKfXd6rKWm1HeqlCRo3TFvbK6oIvEbaF3%2F4uAiZzWLeJzIwMkrYYg5QX1oqUjESKqzAyIiQbRxpyVOcUn2PW4Nke65kslcZMUZBjSAAuVEc2nSg6szI5Xntp8rbSA22g%2BEC6s5aNwtYy56VtDcfUKj5iEPvVjr8xp1t%2F&X-Amz-Signature=fcc9dd3b906d5e46c7b2701aa6f32c9d61bb5cefda2e996755c161254b74227c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

