---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W5LNZYD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7ymwPHBYyYKa76I9DD4CCO1gabLMSSsoXNCZwFcjeiAiALC3E0EwDa0%2FcWI5rToUcBACzpuAUsLFK9gqKpw3dxESr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMpI4WhH1CpLmFHXHyKtwDdGqkyixge3TNEOtcSk%2BRzuBkVbX76GBzsOsJkAuo84uqIXymMnRvGfHfr7sAVj1aMO6pwUxARqre%2BgAPffjZfjbkvQBuEnbrLjzGqQbvirNHiAf8tGmIwdSe9343gtzvBuH31tcpU5%2BHxOqJ41u146BOTivgesxwVcjMe4f5Kcg%2FzSrOGEUyptyRIYD7yykP6Qiw6h%2B6sCDnD%2Fb8xx25HhI%2BTC6Z3CKHHiTM0z1X2ZPwHsnBKIOFL5AVdcU9yXSmKZPH%2BPjC%2FbS%2F%2F4qwo6nx4BAlXv%2BzmAt2%2BRgsD0FWzfKkAeeBdvh%2BjCwh5U9HE0uEdlbJN0EcBBJtalGA9Qws624XTj%2B5IevqcuAC7HDfOxbBj%2FR6%2FdjE3ju3XNDXZmU%2BKdnT52gMrPhQM9k121ISZU3nBP3%2FP1y%2B2iMzfhuoYTFcdOU4whnflHXqXTDbKtDRhGGX3Egq62ZyVXLGlOgHFlY1eLbNJLhnr4ckCdtm%2FgtgOhPG91kPsEqvkvUHYpGarxo%2BT8BT4Rk4ngqt27rn%2BAO3kNrzz2GgbpvvPTYdpbFvk1zsHSOLVShg6FuWo4CvNIhfSglIsMJ7E2BFK0HncIDXWDpDhab4JiYce7KiJmKNNqntbRhm2uN2TXgw%2B%2B7LyQY6pgGxTgB%2B%2FwWgPlpS%2BnbxFqqKJJTh0qUf9T6wyC8QrXsFAsAx9j3MwThPf0qVPgAPkqqieTRDI5ILQn3PGtFXXBDmAoWHrod8Vnair8ILa2PA5bHv9oxsE2cAuC4E8O06MUolWhVI%2FpfQDnSpXLsEqG4life0kCFcjI5slsoT8n7Ps%2BCeULQ1pQVv5Kt91VRymqAQXHEIrY4nNO9nDWLM0D3IKbGO9StQ&X-Amz-Signature=84369a76a38a2fda35d04e103cdd9cf2fad6f593959f5601d12fe5193591566a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W5LNZYD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7ymwPHBYyYKa76I9DD4CCO1gabLMSSsoXNCZwFcjeiAiALC3E0EwDa0%2FcWI5rToUcBACzpuAUsLFK9gqKpw3dxESr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMpI4WhH1CpLmFHXHyKtwDdGqkyixge3TNEOtcSk%2BRzuBkVbX76GBzsOsJkAuo84uqIXymMnRvGfHfr7sAVj1aMO6pwUxARqre%2BgAPffjZfjbkvQBuEnbrLjzGqQbvirNHiAf8tGmIwdSe9343gtzvBuH31tcpU5%2BHxOqJ41u146BOTivgesxwVcjMe4f5Kcg%2FzSrOGEUyptyRIYD7yykP6Qiw6h%2B6sCDnD%2Fb8xx25HhI%2BTC6Z3CKHHiTM0z1X2ZPwHsnBKIOFL5AVdcU9yXSmKZPH%2BPjC%2FbS%2F%2F4qwo6nx4BAlXv%2BzmAt2%2BRgsD0FWzfKkAeeBdvh%2BjCwh5U9HE0uEdlbJN0EcBBJtalGA9Qws624XTj%2B5IevqcuAC7HDfOxbBj%2FR6%2FdjE3ju3XNDXZmU%2BKdnT52gMrPhQM9k121ISZU3nBP3%2FP1y%2B2iMzfhuoYTFcdOU4whnflHXqXTDbKtDRhGGX3Egq62ZyVXLGlOgHFlY1eLbNJLhnr4ckCdtm%2FgtgOhPG91kPsEqvkvUHYpGarxo%2BT8BT4Rk4ngqt27rn%2BAO3kNrzz2GgbpvvPTYdpbFvk1zsHSOLVShg6FuWo4CvNIhfSglIsMJ7E2BFK0HncIDXWDpDhab4JiYce7KiJmKNNqntbRhm2uN2TXgw%2B%2B7LyQY6pgGxTgB%2B%2FwWgPlpS%2BnbxFqqKJJTh0qUf9T6wyC8QrXsFAsAx9j3MwThPf0qVPgAPkqqieTRDI5ILQn3PGtFXXBDmAoWHrod8Vnair8ILa2PA5bHv9oxsE2cAuC4E8O06MUolWhVI%2FpfQDnSpXLsEqG4life0kCFcjI5slsoT8n7Ps%2BCeULQ1pQVv5Kt91VRymqAQXHEIrY4nNO9nDWLM0D3IKbGO9StQ&X-Amz-Signature=b99eb87222d5f43c486cdaefc6d7da71ad9ce7ff590753292ab253d771f2da46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

