---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWABEBVS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZHKa6fRs1SfTYaE5iEBVdqLi8wvS1x3OKIjkwAew3UAiEA90lPFhybVlcY0KuEy38iXzDgzkFj5W6Wbcap49iMiGIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBefc%2FULJaCzyCG72yrcA8IU0nRvdbyjAEZ5tAypvxmXeDhXpb%2BsM3uDG4PJNNlNfK3uj5bUHhMGcVoqpwOy3S5tcDuz2LDf5vGMqPXkiSULYZumoXnsmKVcoVPI0kloaFLSoLSoJ21sYpcRW69HKC7ibAYs74u4EJUtkVPpVxGud39aKVd3l8%2F%2FoZ%2FEPTMlK6TTbqNvLys35t%2Bh%2F49KmhoP8iov3pXjzCZK8j%2BYS%2BvSluO%2BQItlfSFyN2lOVDmPZWxwg2UzxoyTLpf1qx8rsCUdYl8OYfidcSlmcsRpGC9tBXO9hcGjvnrNbL9dZE4bC7YmZKkYLP6v4UsRklcNBWZbwo4pAr5XyBMvkOjmlPV5WpagSGgXCuPoAqbmVfmt7uQLOHwUC3kzK9gnPIR3oqgkOk9W1w2VcCUDadgV1k%2BZFyUEQnbq9DmtOJL%2FEg%2Fy9ayYJREuMt3%2FxY4hiSlvHw6ubECYkEcNT5ZS2V6IZ6Cv0%2BMTsfA%2FHgbUzo%2FHZRdqvy%2B4V1NEYbcYsHkCTMPDuUWpHXhTLCTTMoDF5JZ6%2BMpHodt5V8cblbglcQTYPIZikZE1kFXAIX5toe05EPaCk9P5jkHgszsg%2Bx7UkmfE3x%2BC5K8IZZe0h6Ps2mO5iQNUQhdMBMUnLLMD2noSMJ3C0ckGOqUB%2FTiMt6HabMWD7eH7mGVMvecza6%2Br7%2FGSWhnsFpFdd2yQ285yILAUpNI6QpRqhIAcfjUJC%2B48rLCNnaqJG%2Berbf%2B8JhlU4mDR%2BgygMwSqB48JGQ2AgFhuKUZ7ZbdLwXQu7tyQ8nIVYW08Pm8K8TXHFwRMp%2F3ZHeM5l8DqBIbXMQNwAp4aQvmoBT8wXiXX2NyqOAnQ7VdXjU2nlnrhmfCCc1E6STiZ&X-Amz-Signature=fc82420c979bd54181047f809a9c685d0e7586d9ec8164ba0db67231f79c0cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWABEBVS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZHKa6fRs1SfTYaE5iEBVdqLi8wvS1x3OKIjkwAew3UAiEA90lPFhybVlcY0KuEy38iXzDgzkFj5W6Wbcap49iMiGIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBefc%2FULJaCzyCG72yrcA8IU0nRvdbyjAEZ5tAypvxmXeDhXpb%2BsM3uDG4PJNNlNfK3uj5bUHhMGcVoqpwOy3S5tcDuz2LDf5vGMqPXkiSULYZumoXnsmKVcoVPI0kloaFLSoLSoJ21sYpcRW69HKC7ibAYs74u4EJUtkVPpVxGud39aKVd3l8%2F%2FoZ%2FEPTMlK6TTbqNvLys35t%2Bh%2F49KmhoP8iov3pXjzCZK8j%2BYS%2BvSluO%2BQItlfSFyN2lOVDmPZWxwg2UzxoyTLpf1qx8rsCUdYl8OYfidcSlmcsRpGC9tBXO9hcGjvnrNbL9dZE4bC7YmZKkYLP6v4UsRklcNBWZbwo4pAr5XyBMvkOjmlPV5WpagSGgXCuPoAqbmVfmt7uQLOHwUC3kzK9gnPIR3oqgkOk9W1w2VcCUDadgV1k%2BZFyUEQnbq9DmtOJL%2FEg%2Fy9ayYJREuMt3%2FxY4hiSlvHw6ubECYkEcNT5ZS2V6IZ6Cv0%2BMTsfA%2FHgbUzo%2FHZRdqvy%2B4V1NEYbcYsHkCTMPDuUWpHXhTLCTTMoDF5JZ6%2BMpHodt5V8cblbglcQTYPIZikZE1kFXAIX5toe05EPaCk9P5jkHgszsg%2Bx7UkmfE3x%2BC5K8IZZe0h6Ps2mO5iQNUQhdMBMUnLLMD2noSMJ3C0ckGOqUB%2FTiMt6HabMWD7eH7mGVMvecza6%2Br7%2FGSWhnsFpFdd2yQ285yILAUpNI6QpRqhIAcfjUJC%2B48rLCNnaqJG%2Berbf%2B8JhlU4mDR%2BgygMwSqB48JGQ2AgFhuKUZ7ZbdLwXQu7tyQ8nIVYW08Pm8K8TXHFwRMp%2F3ZHeM5l8DqBIbXMQNwAp4aQvmoBT8wXiXX2NyqOAnQ7VdXjU2nlnrhmfCCc1E6STiZ&X-Amz-Signature=a29b77451209fd6b8605a7356f819a8c6bc69aefa14b911d250715a8385c1bd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

