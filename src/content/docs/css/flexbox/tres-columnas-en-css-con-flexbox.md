---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRG5GDBB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLthmRW%2FsOux6Es4nTfNmj%2FQMF7z7AXBbxd6g0N9%2BrhQIgNns%2BG3T%2B%2FJP0z8w%2FpykbEdLVs3hLqCPkK%2BV3SqUXg8QqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl535Q8l9HqmdP%2B9yrcA725JTnj%2FU6kTiJcAlTiWd88t1EpQj4RlvUV9KPZj1frQabH1xQNmXTnx%2B6HdPPo4Q5t23mTZG0cXe%2F9%2Fh%2BvrJmjONDXRzUeDCC0XzXyh1j6x9%2FOP8V2keQ%2B1c4UbvsrzopvIu2LmVTC7vMnyTdh5qmDC1%2FNXOxpG2LjTvNfBGff%2FwIAKHCqmbv4eFng5DQocatFG%2B%2F7Bs0fuNmY7sTeLXXFDM%2BHDRluyr%2F%2BlYcUAHa224OnLD2JsG5H5WwbUq%2Fj6fLexQ7vGC0MxEHlroo2FchF5Gq2fAb9G5U1k2TGI81xfcNeVKEXb5%2Fc3RzXXM5KFy3CE8p4enzHXUGT7%2FFyJ4hrA0Oo4GK5GpBzyNOwQw%2B6hgf1pEKOOn4CjQZk1gig1Xtbsgo6PdWCWwGZF9NEnDQ6AZdgyQ2Do%2FHnQ7aEwl7uBi%2FtnUCSOUn%2Fyc03Xag7kZQij%2BeDxd4lqU%2FDQ%2Bejz8ZgAa1S3dIr00NDGnuurNlLJKulxqSqLgtB62dgQ71eEjxKX9RRfFprLNOhpuLNikfw%2FnUAtPvf8Fx5XouiVEKW%2BLhJcDj6TczuRXdoMo%2FEGd%2BVeTNYNX1FfCGwYmWDx8CdXp4uk8V5JbQgJEnoc%2F1ifwou3OKTBjgCCL9jMMya1ckGOqUB2oSTS9ZzlV930Y7CRXaBcHPHDx9hxSPm2NeSoAj2PCdPHPw4%2FsKEKD%2Frh5MXh19U0xwgFwOjPgEYe5S2KveOXGngIPuSM7Vk1aS%2FxvuGpkdsKJhhmERl9Ida6f48lUVKfSdT9CBaXKrSaw0UHjE5ydApfYYK6WxFwVTnvIHe6tu%2B%2FqcblW%2FjiXeGwlRmxPYifa9CrK7TSdn%2B6Z%2F4kjGSbckMiyoq&X-Amz-Signature=93b30da5e2839c4e3e731137b17cd5ddf10ee4708eb41c82114dcb9ee72e9a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRG5GDBB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLthmRW%2FsOux6Es4nTfNmj%2FQMF7z7AXBbxd6g0N9%2BrhQIgNns%2BG3T%2B%2FJP0z8w%2FpykbEdLVs3hLqCPkK%2BV3SqUXg8QqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl535Q8l9HqmdP%2B9yrcA725JTnj%2FU6kTiJcAlTiWd88t1EpQj4RlvUV9KPZj1frQabH1xQNmXTnx%2B6HdPPo4Q5t23mTZG0cXe%2F9%2Fh%2BvrJmjONDXRzUeDCC0XzXyh1j6x9%2FOP8V2keQ%2B1c4UbvsrzopvIu2LmVTC7vMnyTdh5qmDC1%2FNXOxpG2LjTvNfBGff%2FwIAKHCqmbv4eFng5DQocatFG%2B%2F7Bs0fuNmY7sTeLXXFDM%2BHDRluyr%2F%2BlYcUAHa224OnLD2JsG5H5WwbUq%2Fj6fLexQ7vGC0MxEHlroo2FchF5Gq2fAb9G5U1k2TGI81xfcNeVKEXb5%2Fc3RzXXM5KFy3CE8p4enzHXUGT7%2FFyJ4hrA0Oo4GK5GpBzyNOwQw%2B6hgf1pEKOOn4CjQZk1gig1Xtbsgo6PdWCWwGZF9NEnDQ6AZdgyQ2Do%2FHnQ7aEwl7uBi%2FtnUCSOUn%2Fyc03Xag7kZQij%2BeDxd4lqU%2FDQ%2Bejz8ZgAa1S3dIr00NDGnuurNlLJKulxqSqLgtB62dgQ71eEjxKX9RRfFprLNOhpuLNikfw%2FnUAtPvf8Fx5XouiVEKW%2BLhJcDj6TczuRXdoMo%2FEGd%2BVeTNYNX1FfCGwYmWDx8CdXp4uk8V5JbQgJEnoc%2F1ifwou3OKTBjgCCL9jMMya1ckGOqUB2oSTS9ZzlV930Y7CRXaBcHPHDx9hxSPm2NeSoAj2PCdPHPw4%2FsKEKD%2Frh5MXh19U0xwgFwOjPgEYe5S2KveOXGngIPuSM7Vk1aS%2FxvuGpkdsKJhhmERl9Ida6f48lUVKfSdT9CBaXKrSaw0UHjE5ydApfYYK6WxFwVTnvIHe6tu%2B%2FqcblW%2FjiXeGwlRmxPYifa9CrK7TSdn%2B6Z%2F4kjGSbckMiyoq&X-Amz-Signature=781c40bad6ac0b60efec7e95a869efcfe837a54447c28e9b85a13965d4da6428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

