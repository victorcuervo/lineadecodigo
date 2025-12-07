---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BC57ME4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGLhokwqohQ6ySW4T1YIr6%2FeopqUulnI%2BBa0r7QUN7CQIhAKRqnZh0mG5vpwN9cfiWWgOHAdkp%2FuPaarpPlBxuuYFqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMAhekoXuWjZd8Tbkq3AP2B5i1YzdNp8HOxZSEIvq%2FliDYGuhWLRMGGSJU%2FYGf%2FHyGo4dC7t%2BcHVLLSr75KW%2F4Ti%2FQL9%2BDvRfvmoxmGCjdeJULvfxBevGIIzm8vRZhKSfTuHHzIL33J%2BeXagQhot%2FrTT01RU8VYlZZGFCTg0L3LNUWMgUHRsnHQvlfl1Ix0Y98EIfBSof%2FFcUQNAaPOmKIZK66Nt%2F4n6yrlVc1EJIBL75ZbMX0RZXZec0F5vIQo%2FidJc8egtv9jiFP9EzW%2BVxigfpo1UTuy8TOt4m2TrWvcPgNvIuCZMx553kSb7mZ0%2B31S61ktHfDCVOQTpeOk6ntqciovojjLXSLCo62o9qSFph0Z02Js7BrH00iEmdd04EW9nwgpkqZra9SCED%2BVStXPuGtoTnhqV74thyoAhXlSdQeKuTfgsAcQVmvw5l%2BMNYwPHqKagan1e3AnU0znJN%2BVxJnjHPRV6bn6EN0QAuIGh8hFCd5zKqSUrtUqPidg1tZgCrLq0zDlLYNSzT7NrYH1KBXyUuTi6CZEl%2FcZoHf5%2BpWP4ErPgZhXFPNKSusu5%2BhcwG4WXKQtuPNfpOwAIyjtF6Qp3cAeEsW49HDZTU871MYHqAuG2pi2oaSNPragqHea%2F%2FOGo7bz%2FxtpzCz%2FdLJBjqkAdt7nwYea1R0l88Csl64e2V4CHZvs3L8CP0Nfuwbt%2FoUOJKbekti7KKsmMDL%2Bq1ul5MmM2woO0OvPRZJargD%2FZQ6cENjytFoJH%2FhFLdOCz4WQYGsoaUpl9Pjm%2BVcuZre%2FqIaEO%2BPymQbY9cWWslvNZ4e9pomwVCsSr%2FU9qaYGTwHKMS7Z%2B4txpbU%2FvhyY%2FHEN4zPh8ZxsuoeK8ibqxB5%2B6Iv%2B79n&X-Amz-Signature=ebacc8c074819aaa52eb149360b95cad7a41606217b6e3fea67fdce6a3e79a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BC57ME4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGLhokwqohQ6ySW4T1YIr6%2FeopqUulnI%2BBa0r7QUN7CQIhAKRqnZh0mG5vpwN9cfiWWgOHAdkp%2FuPaarpPlBxuuYFqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMAhekoXuWjZd8Tbkq3AP2B5i1YzdNp8HOxZSEIvq%2FliDYGuhWLRMGGSJU%2FYGf%2FHyGo4dC7t%2BcHVLLSr75KW%2F4Ti%2FQL9%2BDvRfvmoxmGCjdeJULvfxBevGIIzm8vRZhKSfTuHHzIL33J%2BeXagQhot%2FrTT01RU8VYlZZGFCTg0L3LNUWMgUHRsnHQvlfl1Ix0Y98EIfBSof%2FFcUQNAaPOmKIZK66Nt%2F4n6yrlVc1EJIBL75ZbMX0RZXZec0F5vIQo%2FidJc8egtv9jiFP9EzW%2BVxigfpo1UTuy8TOt4m2TrWvcPgNvIuCZMx553kSb7mZ0%2B31S61ktHfDCVOQTpeOk6ntqciovojjLXSLCo62o9qSFph0Z02Js7BrH00iEmdd04EW9nwgpkqZra9SCED%2BVStXPuGtoTnhqV74thyoAhXlSdQeKuTfgsAcQVmvw5l%2BMNYwPHqKagan1e3AnU0znJN%2BVxJnjHPRV6bn6EN0QAuIGh8hFCd5zKqSUrtUqPidg1tZgCrLq0zDlLYNSzT7NrYH1KBXyUuTi6CZEl%2FcZoHf5%2BpWP4ErPgZhXFPNKSusu5%2BhcwG4WXKQtuPNfpOwAIyjtF6Qp3cAeEsW49HDZTU871MYHqAuG2pi2oaSNPragqHea%2F%2FOGo7bz%2FxtpzCz%2FdLJBjqkAdt7nwYea1R0l88Csl64e2V4CHZvs3L8CP0Nfuwbt%2FoUOJKbekti7KKsmMDL%2Bq1ul5MmM2woO0OvPRZJargD%2FZQ6cENjytFoJH%2FhFLdOCz4WQYGsoaUpl9Pjm%2BVcuZre%2FqIaEO%2BPymQbY9cWWslvNZ4e9pomwVCsSr%2FU9qaYGTwHKMS7Z%2B4txpbU%2FvhyY%2FHEN4zPh8ZxsuoeK8ibqxB5%2B6Iv%2B79n&X-Amz-Signature=8f4445ee74ade32a3fa01ccc492de35941b90c7dba1c6cb75e46f036f6662ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

