---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ABTKGNQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6tAlHe%2BznqDkg8%2BPounu6v6ruVcpvajl%2F9d02CfOXCAiEAxeldqpen1hjKtcTVIhbbcoaGOWgxMJ43MCUJyczkq3sqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUvcgDNzntnUmkB1yrcA8tKB2elSt4%2BnXqUrZoNCkGLu18pfgtmMO8TPkfQTTZnXOQqOWlShvgNGoM9g0h%2BEWfrZJyN%2FDOOehyahvo3PPSPCdLByThD4JI3WPt71226sKMSItLUL2VFHr4wFZakINVTv3B43iPPskocYBAPtUu9zBCcm0m%2F1fyWy25NgWV6v63HiihzlgYEgviqH3Mpf8M0mCjRezJkqLAcNVYcptJtW1%2FQwmTXZnvWluxqs6QJCNc8oz259GNCNNBz9dHI6WuznT7zVUQWRJR%2B9vnR5ucZpwuKkXpnz6Ph%2FqKTSqenDzjPBaP33BQ6LFG2A610HukFXl%2BPLqzi%2FP%2FHCU1AVWSF0rwahq4HKGZFf%2BwI5uHmGWyDXeqbRglnNZocNAR13IuKkzh9m%2FRzgI18%2BhTGtC6ud5SDYWq0sCN8GhMTdcRmRiT2CH4UTIeNrmTtqb1Cl8zpjEp7fYVBTyBhT7mEDSSUIJ%2FnnQzxT1Ura7CIE2%2BASJo3hiyHb02ZpckRuJo7YZuGn6iGnPMOPJaiMrs%2F2wFxX2Yion7wgZmAhiNyzovVA%2FwI8JV%2B%2FRmzE%2B0iQsx%2BfEaK4PdPLAdKgn1FeLlASKHaWAUZYTU7q1KwQ8RGgjwjaHo%2FDw%2B7L9FZvTi3MNOZ1ckGOqUBS5meItgRmNbe0EjqaHMVh3KYRMja3fy5OjSSmujeGbczz9pAFeJV19DAcHYikZvUz6FIRHiXCFXFODjZesHUR8FfyIixcmd698bQA5VrLfPCB8g675qf%2B23eFe4n%2FTStoY1MRrOt02x6arSZjsS%2BgBJfCdxejuX2%2FfgpNL4%2BtaHgXx8hPsHrHk%2Bfo9a5qDdZY7LhT6zzuOGtalPp05dhutXUD7ha&X-Amz-Signature=d0b5f7661477b0d843a8170f58c63c52f45d7671fa6ca8a49378bc91674a4cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ABTKGNQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6tAlHe%2BznqDkg8%2BPounu6v6ruVcpvajl%2F9d02CfOXCAiEAxeldqpen1hjKtcTVIhbbcoaGOWgxMJ43MCUJyczkq3sqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUvcgDNzntnUmkB1yrcA8tKB2elSt4%2BnXqUrZoNCkGLu18pfgtmMO8TPkfQTTZnXOQqOWlShvgNGoM9g0h%2BEWfrZJyN%2FDOOehyahvo3PPSPCdLByThD4JI3WPt71226sKMSItLUL2VFHr4wFZakINVTv3B43iPPskocYBAPtUu9zBCcm0m%2F1fyWy25NgWV6v63HiihzlgYEgviqH3Mpf8M0mCjRezJkqLAcNVYcptJtW1%2FQwmTXZnvWluxqs6QJCNc8oz259GNCNNBz9dHI6WuznT7zVUQWRJR%2B9vnR5ucZpwuKkXpnz6Ph%2FqKTSqenDzjPBaP33BQ6LFG2A610HukFXl%2BPLqzi%2FP%2FHCU1AVWSF0rwahq4HKGZFf%2BwI5uHmGWyDXeqbRglnNZocNAR13IuKkzh9m%2FRzgI18%2BhTGtC6ud5SDYWq0sCN8GhMTdcRmRiT2CH4UTIeNrmTtqb1Cl8zpjEp7fYVBTyBhT7mEDSSUIJ%2FnnQzxT1Ura7CIE2%2BASJo3hiyHb02ZpckRuJo7YZuGn6iGnPMOPJaiMrs%2F2wFxX2Yion7wgZmAhiNyzovVA%2FwI8JV%2B%2FRmzE%2B0iQsx%2BfEaK4PdPLAdKgn1FeLlASKHaWAUZYTU7q1KwQ8RGgjwjaHo%2FDw%2B7L9FZvTi3MNOZ1ckGOqUBS5meItgRmNbe0EjqaHMVh3KYRMja3fy5OjSSmujeGbczz9pAFeJV19DAcHYikZvUz6FIRHiXCFXFODjZesHUR8FfyIixcmd698bQA5VrLfPCB8g675qf%2B23eFe4n%2FTStoY1MRrOt02x6arSZjsS%2BgBJfCdxejuX2%2FfgpNL4%2BtaHgXx8hPsHrHk%2Bfo9a5qDdZY7LhT6zzuOGtalPp05dhutXUD7ha&X-Amz-Signature=b9fe3060d76bbc1dc8c65d14833e51a6bd5621aff99c2fbee01613b8ccfc4bd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

