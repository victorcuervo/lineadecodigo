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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOIU2VOJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDpp2Ifa6tAUB7TL4%2FlIPM3VeFpG%2FS9ZLin%2FleeA3O7MAiBM3cD0vRu1CjvzBv0TZEOldan5xhweaXf8o0Yke7bInyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMT5JF64GMnCAFpx1FKtwD36nOp3rsIaxRlEHkVbaxtoRRF9JTW8q%2B%2FPpSkSIWhbo%2BXOdSBbOJpK1gH50HsQKfqTo3ozwZWRgGGuRV6ROwq%2B6fC4169ZfmJSRVcg%2BE%2Bi7K2z%2Fj0nF5YN1%2FBUSxibm%2BLvkGybe0IvW5KmkmlgfKUjS310nau4ycCfixOB1fDtyDHfkqZMuoAY1RdFl1f%2FSxrNwD1yNN2MIRf7vsvtTSEShF%2BYhrWSlkhO4tWC1YuWekCWLuSUAMZ%2FIQUgov%2BEUrkC%2B62UVACoRh5bHz52WnJsfj%2B6O5Y4clS1kQM9%2BYwSh7QYIr4LJwtmphc7B%2Fpme5EQEWdE6y5vpmyCERrGhAnfPtRpsFBMTWOAXyw1gsuGHTIkchjy0wjfj%2BQsfE2xXxxWBfm46XfF6SlzKbI5oZ3I2L1aqdESF8VOASt4gbOS0vm2MFdcF9CfA66fZkaUG0%2FJ8mnjfLs6nNPN5fjL7WS4yZQnq%2BM%2Fsr70etm04FjDs2Zruh0z9229E3fJ0%2F7yleAMKDR4WQln5kpEi1ri%2BfGRmsAPMIDw195RP0FVygebSsO1gDNY1wrJW20BM1Gp%2FgRcnO%2Bp9Tc384Yh537oHms0N%2B7EfHXsEqyZDzjZ6UeuVFfgwEr8LuH7jLxKAwtOnAyQY6pgH4dYWzTUQPesAti6y2jmyTV6s5fkwPQLytou%2FHHIxtJa1ok69ZeLr3VwA0N0MwSetWD9oFuJIyJms18CLzeWz5%2Fwgp9cRtl2fDKf0%2FoFn7exxJC%2FRUZ91yrfstUDNqZr1e53qiJn63biXGdb3kXObhdtb%2B4bESC6h135RKyZ76yn4PLiE9GGQrF0bNWZWJWyunnsYQXws1QNcBQ%2FodsHqVa9NhYmrU&X-Amz-Signature=457f70477724de24d784bfeb229b1562cef042a05ac580136959ad15748f9814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOIU2VOJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDpp2Ifa6tAUB7TL4%2FlIPM3VeFpG%2FS9ZLin%2FleeA3O7MAiBM3cD0vRu1CjvzBv0TZEOldan5xhweaXf8o0Yke7bInyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMT5JF64GMnCAFpx1FKtwD36nOp3rsIaxRlEHkVbaxtoRRF9JTW8q%2B%2FPpSkSIWhbo%2BXOdSBbOJpK1gH50HsQKfqTo3ozwZWRgGGuRV6ROwq%2B6fC4169ZfmJSRVcg%2BE%2Bi7K2z%2Fj0nF5YN1%2FBUSxibm%2BLvkGybe0IvW5KmkmlgfKUjS310nau4ycCfixOB1fDtyDHfkqZMuoAY1RdFl1f%2FSxrNwD1yNN2MIRf7vsvtTSEShF%2BYhrWSlkhO4tWC1YuWekCWLuSUAMZ%2FIQUgov%2BEUrkC%2B62UVACoRh5bHz52WnJsfj%2B6O5Y4clS1kQM9%2BYwSh7QYIr4LJwtmphc7B%2Fpme5EQEWdE6y5vpmyCERrGhAnfPtRpsFBMTWOAXyw1gsuGHTIkchjy0wjfj%2BQsfE2xXxxWBfm46XfF6SlzKbI5oZ3I2L1aqdESF8VOASt4gbOS0vm2MFdcF9CfA66fZkaUG0%2FJ8mnjfLs6nNPN5fjL7WS4yZQnq%2BM%2Fsr70etm04FjDs2Zruh0z9229E3fJ0%2F7yleAMKDR4WQln5kpEi1ri%2BfGRmsAPMIDw195RP0FVygebSsO1gDNY1wrJW20BM1Gp%2FgRcnO%2Bp9Tc384Yh537oHms0N%2B7EfHXsEqyZDzjZ6UeuVFfgwEr8LuH7jLxKAwtOnAyQY6pgH4dYWzTUQPesAti6y2jmyTV6s5fkwPQLytou%2FHHIxtJa1ok69ZeLr3VwA0N0MwSetWD9oFuJIyJms18CLzeWz5%2Fwgp9cRtl2fDKf0%2FoFn7exxJC%2FRUZ91yrfstUDNqZr1e53qiJn63biXGdb3kXObhdtb%2B4bESC6h135RKyZ76yn4PLiE9GGQrF0bNWZWJWyunnsYQXws1QNcBQ%2FodsHqVa9NhYmrU&X-Amz-Signature=e20b9933823d73305a3c0c63b59ab3dd59b8781bc3b3db2a46bfc1c0888e4994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

