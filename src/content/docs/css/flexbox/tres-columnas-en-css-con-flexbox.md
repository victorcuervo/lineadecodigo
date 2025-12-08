---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKFIQUR6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH97d88GQvJJVAYfKoSmdlOyoG58Ho7b0oUGkCiI2%2F4tAiAFMdsAjyE%2FgK5RMk1tFimn%2FrMJWV9aD%2BVw0aEwIBch4CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BlwIkEedAUkPMJ%2FOKtwDnSrrzN6ch4NK3aX2Q1tVsDiIpkSayzsTBEHk5%2FeloGdq%2F4kXaN1Vc%2Be%2B5cyDeDXwGmcgfKJWSgSGoKuruqFK180v8SGJrAF2%2BMeJC6OJUFXwef9ngREeG6Gs4f6AwxNsRmtThfk5ksEuyRDO8i%2BcraHKdntmp8xbHKHooLygpj498fS5p3Zmev8cmrZxrHiIG3WeCFas0ih0b5YjWhGoVQexdbC37gMhgcbWSIk1pXfuyfnuufMoMUYjxzVxn9pgMFfL1b93az%2FyrvtaUx2j9tG%2BTU8qkH4C3XBuCO03h4K3sc44fn4QlP9Rkz9nbYBDlipAYiMQ4eANHvRsFf4SrItd%2BcRsNvNZa84upfhc5OgcFkWSdwIoT8cKjk1sDz7LISjBLpGYV3HkOostJD2qOLnM9L5LDbAefQrTXpCABl5FUeAQUKp3p2v%2B9atmGTkt01kUq5BP%2FvEoS8X7QgGycFbxQru%2B%2F%2FFPueV9wR4Gq7Q4s629c1XNKVouG63wdVpcObB6bIDwaIMH3UmkDSrMHSpH62qQjCITW59txHbgp%2FBRfZkOedyDR7XLzW67sW7uTQDs9jlFoXl35ov3X2Vx6tdsim9gkefnftv3WWNxAeba2RC5rxSarmQ2uswwjbTZyQY6pgEHlu8zkcEnq0fKAv6wLqdtDU0YYYAOp1INmHpuiPTxXP4LjNv7m7zM7a9AxeIQVKWzxpoZixHeIXi3an7b11wNd8OOsfobB6AnPaBOEWdhlF0SoPgOmJ%2FOUhxiBBFgd9%2B1E4L11Lu1%2FZabGob%2BzrMjPMIs1BLyQuJBtApqAHhlTT0lEjZFVeeTkWvL93Vq0D2meGLHF2ld%2BgRA6%2Fu1OGjlF171g1jX&X-Amz-Signature=7e906d82816be3b88f1694eb07efc754c19fe6e5f9fb95f4cc86607309980e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKFIQUR6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH97d88GQvJJVAYfKoSmdlOyoG58Ho7b0oUGkCiI2%2F4tAiAFMdsAjyE%2FgK5RMk1tFimn%2FrMJWV9aD%2BVw0aEwIBch4CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BlwIkEedAUkPMJ%2FOKtwDnSrrzN6ch4NK3aX2Q1tVsDiIpkSayzsTBEHk5%2FeloGdq%2F4kXaN1Vc%2Be%2B5cyDeDXwGmcgfKJWSgSGoKuruqFK180v8SGJrAF2%2BMeJC6OJUFXwef9ngREeG6Gs4f6AwxNsRmtThfk5ksEuyRDO8i%2BcraHKdntmp8xbHKHooLygpj498fS5p3Zmev8cmrZxrHiIG3WeCFas0ih0b5YjWhGoVQexdbC37gMhgcbWSIk1pXfuyfnuufMoMUYjxzVxn9pgMFfL1b93az%2FyrvtaUx2j9tG%2BTU8qkH4C3XBuCO03h4K3sc44fn4QlP9Rkz9nbYBDlipAYiMQ4eANHvRsFf4SrItd%2BcRsNvNZa84upfhc5OgcFkWSdwIoT8cKjk1sDz7LISjBLpGYV3HkOostJD2qOLnM9L5LDbAefQrTXpCABl5FUeAQUKp3p2v%2B9atmGTkt01kUq5BP%2FvEoS8X7QgGycFbxQru%2B%2F%2FFPueV9wR4Gq7Q4s629c1XNKVouG63wdVpcObB6bIDwaIMH3UmkDSrMHSpH62qQjCITW59txHbgp%2FBRfZkOedyDR7XLzW67sW7uTQDs9jlFoXl35ov3X2Vx6tdsim9gkefnftv3WWNxAeba2RC5rxSarmQ2uswwjbTZyQY6pgEHlu8zkcEnq0fKAv6wLqdtDU0YYYAOp1INmHpuiPTxXP4LjNv7m7zM7a9AxeIQVKWzxpoZixHeIXi3an7b11wNd8OOsfobB6AnPaBOEWdhlF0SoPgOmJ%2FOUhxiBBFgd9%2B1E4L11Lu1%2FZabGob%2BzrMjPMIs1BLyQuJBtApqAHhlTT0lEjZFVeeTkWvL93Vq0D2meGLHF2ld%2BgRA6%2Fu1OGjlF171g1jX&X-Amz-Signature=77c0c7bc384355572c041d63b760964adbb1c34920d302112a2d652908dd3780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

