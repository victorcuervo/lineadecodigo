---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6O5HQ2N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBWETPQmruuaqYf8cOsKKhTssKnvHKVqHIYnLredlurJAiEAx%2FoirsO9RqdrHU%2FbWG61m3iqqKd9AsKPxak4KhyQ%2F%2FIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFcgl%2B%2Fb5zDQdzKntCrcA2EfI6yDYR8jjCbADVjKDqohwngA%2FT88I7y%2FnQMXmSq6hmscrsUTBDEMsblPcKa%2BkPV9q4qiEYyILCeYGVLmpmgoBeTMJ1heEIznaPz7GsZFhfUfKTJvJZLH%2FnSqV57iONSELpYDBLirsSE71FWEi1F0afsLplmSG5uKlihz2Z0N3jdAkZph9d%2BC0%2BPycOpcxYQ7SpitR6o6SN7cCmVNvB2oGKCJUtxhcPxcMR8My4Ammz5OhFP0CS3S5NJvMk%2BWLHl11cuw%2FHHh7BUulcKaR%2F1MeKSsY%2FgQMd0fEso4b8iY2JjhDJ4%2F1FiyanOkod5Feh4%2FNwzJVZrBeaCCb9DCUHH1Mj702VTHxozOgWzLOUGNTpD5IpXZLJcND8fJMaJ7m0fG4J8BUWmfCmc4V3HRy7a5GLxHyQuFYqRwq6tW%2BQsAoxrNGCpz4nWqPob3llzEc%2F3si59DIxZYAmqb5P3XvUH5EfjpxHoBWZmd5Ki0os1fadwk8N0Gz00OyEAMGsfqdxWG60XYdOYH006H2R4fm7Ks07OSUs%2F%2F64hCkp8K9So6g3qX57xMRm34DmDR3uiCG9A3YS6DiFwU6z6Lpb%2Bf67PjBIzThPqIDnI1R8J7nLuZ7kzERRIm694wdDQ3MIfqwMkGOqUBeq1LJIH6MYfRv2g3%2BO4MtCUyKTVyMYIgLX4IxCvcSQNvg0rOu%2BmHGc4qClDWdLnk%2BHbrCG66fdiFGdLz%2BlcxCZPVMevP8j7%2BoeecgbUw4asAhRF%2B788j2k%2FdWSXeI%2BG38M8XuStx3fevtPAkquZezfYU68kcSDHo4wDILZ8Eur%2BLvIV91L1Sk8X252sBd%2BEqRMYFDDX6TsLkLxdzy9PyrJ2vNiZu&X-Amz-Signature=6f404ae14e011fd87ee8529232c1f73dc39a3102608c2a049f598ec2d8754d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6O5HQ2N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBWETPQmruuaqYf8cOsKKhTssKnvHKVqHIYnLredlurJAiEAx%2FoirsO9RqdrHU%2FbWG61m3iqqKd9AsKPxak4KhyQ%2F%2FIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFcgl%2B%2Fb5zDQdzKntCrcA2EfI6yDYR8jjCbADVjKDqohwngA%2FT88I7y%2FnQMXmSq6hmscrsUTBDEMsblPcKa%2BkPV9q4qiEYyILCeYGVLmpmgoBeTMJ1heEIznaPz7GsZFhfUfKTJvJZLH%2FnSqV57iONSELpYDBLirsSE71FWEi1F0afsLplmSG5uKlihz2Z0N3jdAkZph9d%2BC0%2BPycOpcxYQ7SpitR6o6SN7cCmVNvB2oGKCJUtxhcPxcMR8My4Ammz5OhFP0CS3S5NJvMk%2BWLHl11cuw%2FHHh7BUulcKaR%2F1MeKSsY%2FgQMd0fEso4b8iY2JjhDJ4%2F1FiyanOkod5Feh4%2FNwzJVZrBeaCCb9DCUHH1Mj702VTHxozOgWzLOUGNTpD5IpXZLJcND8fJMaJ7m0fG4J8BUWmfCmc4V3HRy7a5GLxHyQuFYqRwq6tW%2BQsAoxrNGCpz4nWqPob3llzEc%2F3si59DIxZYAmqb5P3XvUH5EfjpxHoBWZmd5Ki0os1fadwk8N0Gz00OyEAMGsfqdxWG60XYdOYH006H2R4fm7Ks07OSUs%2F%2F64hCkp8K9So6g3qX57xMRm34DmDR3uiCG9A3YS6DiFwU6z6Lpb%2Bf67PjBIzThPqIDnI1R8J7nLuZ7kzERRIm694wdDQ3MIfqwMkGOqUBeq1LJIH6MYfRv2g3%2BO4MtCUyKTVyMYIgLX4IxCvcSQNvg0rOu%2BmHGc4qClDWdLnk%2BHbrCG66fdiFGdLz%2BlcxCZPVMevP8j7%2BoeecgbUw4asAhRF%2B788j2k%2FdWSXeI%2BG38M8XuStx3fevtPAkquZezfYU68kcSDHo4wDILZ8Eur%2BLvIV91L1Sk8X252sBd%2BEqRMYFDDX6TsLkLxdzy9PyrJ2vNiZu&X-Amz-Signature=dc129430fdd7ddfd493e78df488f622bb30c1dc36fbf70caf851a6dee49c9fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

