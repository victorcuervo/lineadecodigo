---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DSUY3UF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfYxvfMdN0cMEMt7fgyMM93kl8DyWCLLKaf2EP%2FhjccQIgJoM0UCBgA3CLXSaZA%2FS4cAk9JUx%2BitMxxs7aJU%2BYRn0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDB5zsCQEQkesF6xHVCrcA4uHQot%2BGNdwQf33wiRscNqxkHfMSaxZOktxJnX60HHRpkOrrtccVTmNnFW5%2BMbJ1ypHukWvYAP9G%2Fuo0uE8cgtWH4hUf2r0yz8%2BSzdUDB%2F%2FlIC4cCTdStTeoXcgnBPJircCS017cJ%2B0YeY75sEY8xf84yXtQUcF%2Bx6sPAHc4oRRo4trWpBOOtB15acd%2BDRJEEUHdRVQ3RGB8TGJKUJiMSU9ckRqhMVc7tPdiDPf7207KxViFSB7KHr1x1kK9dwVz4NASx3gYu7YJwBpcHzds7fedsl50h%2BuB8vrxahXQCWQww2UmhXaDFedbw4rBSRKYyYe9Eu5LTxFH40EOt1igkWTBfrBiGEjnYQdjX2iL8pUPkMaLiEMLmTsu7wdaM0sVm7Z28nNe6rvdD3x30Rmijb0918BNjrd1Xm52pWKwZ9SkMQHI%2BGgwFtSH9lv6hwFDFADniCayf8u9a%2F1Y60T7x78rzrV3TL%2B107%2FxpQ4LcDXCaGKxlAKOs7KGFbubAq%2BE24q4yBmGafQfZoQzupE2lzGY81Ic%2FZs3WZQNjgwJcmU2svFaVe8mVIIdZckmTRyEHDlMb3%2Bi9fjITukpo5gCw6rlW8q0AajKUXkKoqSzHTwwO23Ark49iLjxs6yMLvB0ckGOqUB1K5yHQrV4%2BMOOFAb8kyfHMh3ejMCHTk9FDHyTGyA9I1ca2dlAuze3iUeCCr7jvJU3boIBkFSlEp85d%2F7BRSX6upsOzH0idLh3xCIF%2FbvuIHssWg%2FR1Ol9bKTTLqp9exj5q9vJsraovfQY1wZ%2BdZaT2nldSzJ3y%2BzmM2o5gp2BuyFY1Uh9Z7jBND59Y2n0w%2BlefpY2Xn8gV4zCzlt9lq7Zc6reAcg&X-Amz-Signature=7aa0265ad451e5adfd7879ead391edbc4a7e4be73c4d6c3bac967ad242a035a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DSUY3UF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfYxvfMdN0cMEMt7fgyMM93kl8DyWCLLKaf2EP%2FhjccQIgJoM0UCBgA3CLXSaZA%2FS4cAk9JUx%2BitMxxs7aJU%2BYRn0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDB5zsCQEQkesF6xHVCrcA4uHQot%2BGNdwQf33wiRscNqxkHfMSaxZOktxJnX60HHRpkOrrtccVTmNnFW5%2BMbJ1ypHukWvYAP9G%2Fuo0uE8cgtWH4hUf2r0yz8%2BSzdUDB%2F%2FlIC4cCTdStTeoXcgnBPJircCS017cJ%2B0YeY75sEY8xf84yXtQUcF%2Bx6sPAHc4oRRo4trWpBOOtB15acd%2BDRJEEUHdRVQ3RGB8TGJKUJiMSU9ckRqhMVc7tPdiDPf7207KxViFSB7KHr1x1kK9dwVz4NASx3gYu7YJwBpcHzds7fedsl50h%2BuB8vrxahXQCWQww2UmhXaDFedbw4rBSRKYyYe9Eu5LTxFH40EOt1igkWTBfrBiGEjnYQdjX2iL8pUPkMaLiEMLmTsu7wdaM0sVm7Z28nNe6rvdD3x30Rmijb0918BNjrd1Xm52pWKwZ9SkMQHI%2BGgwFtSH9lv6hwFDFADniCayf8u9a%2F1Y60T7x78rzrV3TL%2B107%2FxpQ4LcDXCaGKxlAKOs7KGFbubAq%2BE24q4yBmGafQfZoQzupE2lzGY81Ic%2FZs3WZQNjgwJcmU2svFaVe8mVIIdZckmTRyEHDlMb3%2Bi9fjITukpo5gCw6rlW8q0AajKUXkKoqSzHTwwO23Ark49iLjxs6yMLvB0ckGOqUB1K5yHQrV4%2BMOOFAb8kyfHMh3ejMCHTk9FDHyTGyA9I1ca2dlAuze3iUeCCr7jvJU3boIBkFSlEp85d%2F7BRSX6upsOzH0idLh3xCIF%2FbvuIHssWg%2FR1Ol9bKTTLqp9exj5q9vJsraovfQY1wZ%2BdZaT2nldSzJ3y%2BzmM2o5gp2BuyFY1Uh9Z7jBND59Y2n0w%2BlefpY2Xn8gV4zCzlt9lq7Zc6reAcg&X-Amz-Signature=8ed8db659f9a68ffb865dd26a72650cb92bf68664b6c3d73418469f6d56f2994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

