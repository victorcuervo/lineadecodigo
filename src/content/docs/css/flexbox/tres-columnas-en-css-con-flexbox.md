---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSXFRQZH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG%2BELYKUJbZ4YNA2abKG2UA1Az%2FmbuOf%2BTiflL9Bw0xAIgdu0%2BuboJcJL5fjOUaK%2FzbuebWKwiym86j06BaLH3cj4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVuVaTNm9LCu3d12SrcA0F%2F7L8XwONIg9nsaxuMGG947DP0kwexmVEHu%2B33CkPKRXocbo1GJRtlr46obTToCKhi1MR3hIHHO2eQx%2Bvoehs26LTipQJcJoCmm%2FzUBGSAHVKlWgd5bSoASji6L4mMoJsZOyzIKllUDUeidtNkkuj0fHMgy0LOrscCfNLV1YC8Yet98wguR43UAn8gW5mGAIfwVW6Jhgt7t5veJYA5GUgYkZ5VWbjVhCL6Za%2BM7C3vsJsjcctHC7dMZBdMHqhxNGm7Pli5tnHtAS6mR2XvQdILyOKn8A2Spno7Roj9YlfUt637p7xB5YEHpiPvAE7iVUX98Nwi6AexCWy6QuWRlwtb3jxd7kejJE30qKqjJTofNeZVch9O%2BwMIQFdAcPzcnhcPlNBim%2BhKGEAM3S1aSMvbDfeELasz%2BQ7YV1YUKDziDSi46XBScmoT1wGQvZ5fxP4KVn1ejwjtxZODIx%2F0VhiwsQ%2Bj5DbvEfanEKWMKAEIQw7K3gA%2BomCfKZWLMcFCVMyIHaGd6EEvQNaiBpDW%2B%2F3c3Sgm1jXbCFpVdk5vDcTAYTBIYek5PTA38u%2FLgpNCA9bGRRyQSyZETUTsaf52U05dJW2RdCZOglp8ArgdxTomPjKqYKGz5Ftme28xMJr90skGOqUByO1Wb9EcgZhNVLf5GiA94CTwHWL18buO3Zw55Q%2BRyVkH2jwfo38s0HI0CFJTfmHilIQmek8NJVfJFaM9m5wo4i8wcyBGStv6Z9ty9T8xA9zSQ%2BeArw14%2B%2FojBC8beSBDj80TUuXAkUaTtNI3DBKIi7F2RiIcjsWjHPoObzGHIyT8KGr3TkS%2BbwNlqOZ9vDlm8nsfapEvUUpz9oc9H4799p1vRECZ&X-Amz-Signature=c6fbde9c6b19f2bb3c657defec4b56ae1b86b81adf6ca41408197852f19f2194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSXFRQZH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG%2BELYKUJbZ4YNA2abKG2UA1Az%2FmbuOf%2BTiflL9Bw0xAIgdu0%2BuboJcJL5fjOUaK%2FzbuebWKwiym86j06BaLH3cj4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVuVaTNm9LCu3d12SrcA0F%2F7L8XwONIg9nsaxuMGG947DP0kwexmVEHu%2B33CkPKRXocbo1GJRtlr46obTToCKhi1MR3hIHHO2eQx%2Bvoehs26LTipQJcJoCmm%2FzUBGSAHVKlWgd5bSoASji6L4mMoJsZOyzIKllUDUeidtNkkuj0fHMgy0LOrscCfNLV1YC8Yet98wguR43UAn8gW5mGAIfwVW6Jhgt7t5veJYA5GUgYkZ5VWbjVhCL6Za%2BM7C3vsJsjcctHC7dMZBdMHqhxNGm7Pli5tnHtAS6mR2XvQdILyOKn8A2Spno7Roj9YlfUt637p7xB5YEHpiPvAE7iVUX98Nwi6AexCWy6QuWRlwtb3jxd7kejJE30qKqjJTofNeZVch9O%2BwMIQFdAcPzcnhcPlNBim%2BhKGEAM3S1aSMvbDfeELasz%2BQ7YV1YUKDziDSi46XBScmoT1wGQvZ5fxP4KVn1ejwjtxZODIx%2F0VhiwsQ%2Bj5DbvEfanEKWMKAEIQw7K3gA%2BomCfKZWLMcFCVMyIHaGd6EEvQNaiBpDW%2B%2F3c3Sgm1jXbCFpVdk5vDcTAYTBIYek5PTA38u%2FLgpNCA9bGRRyQSyZETUTsaf52U05dJW2RdCZOglp8ArgdxTomPjKqYKGz5Ftme28xMJr90skGOqUByO1Wb9EcgZhNVLf5GiA94CTwHWL18buO3Zw55Q%2BRyVkH2jwfo38s0HI0CFJTfmHilIQmek8NJVfJFaM9m5wo4i8wcyBGStv6Z9ty9T8xA9zSQ%2BeArw14%2B%2FojBC8beSBDj80TUuXAkUaTtNI3DBKIi7F2RiIcjsWjHPoObzGHIyT8KGr3TkS%2BbwNlqOZ9vDlm8nsfapEvUUpz9oc9H4799p1vRECZ&X-Amz-Signature=501acbe1f5b1aca88893f83681872af14f52b47107b2098d5fb562a4de13c693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

