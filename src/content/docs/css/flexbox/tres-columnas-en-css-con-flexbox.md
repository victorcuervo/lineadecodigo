---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664I2K27V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuHTALH5QzvXa94POqW8epZ6MDKmjL5xpBsmXQM4jAEgIgZhrlxjgoAQ7IpTwnR373Mt4BhX7GPgeoQ8DATQNoU0gq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGv%2BBOUMwsl39kX8MircA5ZAKD4UHPOw1P8aY7qWW8uu8UNcAHHD6UXoGeCS4MC2KMvvmIguupy1uvM9%2FpjTwAffJBdReoDAABcmbXF6IlnBaZZ%2B64KoGZUWuez9Yyr76UtQG6rnpmN%2BMTqcFjK747MsScwjcSiRf5dV0RmIyf5HRHDs6fPIh%2B0nqxjbxY4FhG2lHeOSmTQ1KMJDaQQxMVgVQtkMG9VSvbQNigUM44oFVJXQMoxNhV6DpRyOIO65%2Bx6Ip8aBhJTsOiHz6PAbVnZBysnz%2BFEd4hSNjhUMdIgWC9nL%2BPMnJ%2FVaqoh61nv4igUwn5uh0MuCbcfDB7gufBiKVFT9psz2HziZSpbcKw7I1sifLPmOcMbQkdcgmlNygxnk2ybjukIkCEuauXdv77QaROaPMRIgF1co0zTq03qbwSrCvTwmgALfEn2N%2FUBQg8P6vlGaxpwgPmaBxfZ%2BTz1TD9GrN77aMQKx9KuuSPT29gOaj3U0Me%2Fzefns5Tx0O%2B2w9qoPo%2FXH07HYLRqkrwdqbVLoFqA61R6BwJxZiqhtCL5ZAA4VhcSI9xUtYOZtF0GeSsrwu8a8gan7tGB4oBA%2FH2MjLLgfVWIhK1rjCj3TOegP%2FLuIebzS8EmhmHh%2BGhwuNXMgV8VKMeo5MPH9y8kGOqUBEYLveeEBd19aaV91YOwo%2FlMZJSUHWWPKZwDPd%2FEyRTrnF%2FuJegTFmIOngn1VIl0BIt1Cleynxbq4nbjxAkdTPwATfwaF71gh4hWCnj6H%2Fe9ySGim%2BpHl0f67bdPuWXcfy2kN07DDF3771trYwP%2BaxFX70zzu1mockj%2BNbU2QPfr62ZTi721%2FGqNNn2RmYbaNL45cN5TbIYE496squjCdpV3%2Fuswj&X-Amz-Signature=ff3a578e4776ee657a1b364e97590adbf7611ee7b9e89e75faa7bbd8ccd3cc8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664I2K27V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuHTALH5QzvXa94POqW8epZ6MDKmjL5xpBsmXQM4jAEgIgZhrlxjgoAQ7IpTwnR373Mt4BhX7GPgeoQ8DATQNoU0gq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGv%2BBOUMwsl39kX8MircA5ZAKD4UHPOw1P8aY7qWW8uu8UNcAHHD6UXoGeCS4MC2KMvvmIguupy1uvM9%2FpjTwAffJBdReoDAABcmbXF6IlnBaZZ%2B64KoGZUWuez9Yyr76UtQG6rnpmN%2BMTqcFjK747MsScwjcSiRf5dV0RmIyf5HRHDs6fPIh%2B0nqxjbxY4FhG2lHeOSmTQ1KMJDaQQxMVgVQtkMG9VSvbQNigUM44oFVJXQMoxNhV6DpRyOIO65%2Bx6Ip8aBhJTsOiHz6PAbVnZBysnz%2BFEd4hSNjhUMdIgWC9nL%2BPMnJ%2FVaqoh61nv4igUwn5uh0MuCbcfDB7gufBiKVFT9psz2HziZSpbcKw7I1sifLPmOcMbQkdcgmlNygxnk2ybjukIkCEuauXdv77QaROaPMRIgF1co0zTq03qbwSrCvTwmgALfEn2N%2FUBQg8P6vlGaxpwgPmaBxfZ%2BTz1TD9GrN77aMQKx9KuuSPT29gOaj3U0Me%2Fzefns5Tx0O%2B2w9qoPo%2FXH07HYLRqkrwdqbVLoFqA61R6BwJxZiqhtCL5ZAA4VhcSI9xUtYOZtF0GeSsrwu8a8gan7tGB4oBA%2FH2MjLLgfVWIhK1rjCj3TOegP%2FLuIebzS8EmhmHh%2BGhwuNXMgV8VKMeo5MPH9y8kGOqUBEYLveeEBd19aaV91YOwo%2FlMZJSUHWWPKZwDPd%2FEyRTrnF%2FuJegTFmIOngn1VIl0BIt1Cleynxbq4nbjxAkdTPwATfwaF71gh4hWCnj6H%2Fe9ySGim%2BpHl0f67bdPuWXcfy2kN07DDF3771trYwP%2BaxFX70zzu1mockj%2BNbU2QPfr62ZTi721%2FGqNNn2RmYbaNL45cN5TbIYE496squjCdpV3%2Fuswj&X-Amz-Signature=07e124f9ed050c6ad8f71b03435a7ec3b250eaab0abc0b531f5810c9e78a68ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

