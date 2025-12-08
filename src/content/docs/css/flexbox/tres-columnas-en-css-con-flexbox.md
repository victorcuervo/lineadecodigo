---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMDRB2JC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtO690jukFG49dL4IAe26jyqaal7heG7TuqBIqObrG2AiEAie1KaEAx7LrbklqMdYYiO4EvYIDdQuitkgDKbAO3F2AqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoutxHzWIRF3h1hbyrcAw2s8%2Bzt5pY91G8ohcFaeIVk49Xs8SxAu4vuDqy%2BMvHUbCpOs%2BVNzE85oUx9Iz8dgClkGo4VjTGWeTKXipHzD3Am8zlwT7%2FMBl3J1XM8HKCWaCm9hN6pd715ZYe%2FFDujTm0X94UcTSaAqm7FAV%2Be%2B3iERpnMiO4RxIXCJvhjfnscoXpt1N9slQFEMue9ms68yGxahWANBdq4XMM8ku4oBVoKWVHwfG4WZoD6QGmv6ESw8%2BN2zkaJw4q7KRh4IpDp0BXTMwbyJpC83m0QcRvOvCfcucGF1X7HEpK8HAcjDAsQcJxTm0%2B8%2BESdTm3ctEYSB6erCPpYYJLfnb7LcjYAWdC%2BmbYc84kR4DA6vun5IH0j7xmwOYvfxwUAmQV1fXagXTZ76L8DzKXX2jj%2FVWBy4p%2Bo4cVycttuF4l73bDp3yOT0xbjlhsdASGUfRU%2BH91jDUCRsdhdJ7OQBObgVsdmBNgAAYrgNlaSSHI14Jrqff3hKhrdqFtE5IdH4tvgmQklOrtDEZQzduAjaeU33TpWrs1aFgYabgkJ9X0BXJe%2FvHZfLjyTSyRUu9GqOdbqfKiFRoKk9f3IOtACnYSUai62Mo%2BLRvVamMLIMeHQVcwbvKWFJ4asnotAgINIHdJ6MJXv2MkGOqUB1C4ZCuyF4tLLGe%2Bvtq26aA0Pto7iJvlf3wUPjzZAFdHBEMXGuliBLciRmY1gYrBmHc%2FGAGni8cqwV9w7x4nZzxYG%2BgMo4k%2BWyyLhn%2FzpY9EC8%2FIKgrJmFCOWN%2FLrrJk0yFn9MFSwwYy2GbLfLuLB9HqewUU1C40AUwbw3NXOAKvyk8UMX3ru%2FZhP1lLlyNoJ%2BnqsTfZdgh9QjCKGQTcfAUIYvqFX&X-Amz-Signature=3a624c1b6870b450a6b76ec7c265dbc4b3b720c68f5384bf22770ff08ca89868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMDRB2JC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtO690jukFG49dL4IAe26jyqaal7heG7TuqBIqObrG2AiEAie1KaEAx7LrbklqMdYYiO4EvYIDdQuitkgDKbAO3F2AqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoutxHzWIRF3h1hbyrcAw2s8%2Bzt5pY91G8ohcFaeIVk49Xs8SxAu4vuDqy%2BMvHUbCpOs%2BVNzE85oUx9Iz8dgClkGo4VjTGWeTKXipHzD3Am8zlwT7%2FMBl3J1XM8HKCWaCm9hN6pd715ZYe%2FFDujTm0X94UcTSaAqm7FAV%2Be%2B3iERpnMiO4RxIXCJvhjfnscoXpt1N9slQFEMue9ms68yGxahWANBdq4XMM8ku4oBVoKWVHwfG4WZoD6QGmv6ESw8%2BN2zkaJw4q7KRh4IpDp0BXTMwbyJpC83m0QcRvOvCfcucGF1X7HEpK8HAcjDAsQcJxTm0%2B8%2BESdTm3ctEYSB6erCPpYYJLfnb7LcjYAWdC%2BmbYc84kR4DA6vun5IH0j7xmwOYvfxwUAmQV1fXagXTZ76L8DzKXX2jj%2FVWBy4p%2Bo4cVycttuF4l73bDp3yOT0xbjlhsdASGUfRU%2BH91jDUCRsdhdJ7OQBObgVsdmBNgAAYrgNlaSSHI14Jrqff3hKhrdqFtE5IdH4tvgmQklOrtDEZQzduAjaeU33TpWrs1aFgYabgkJ9X0BXJe%2FvHZfLjyTSyRUu9GqOdbqfKiFRoKk9f3IOtACnYSUai62Mo%2BLRvVamMLIMeHQVcwbvKWFJ4asnotAgINIHdJ6MJXv2MkGOqUB1C4ZCuyF4tLLGe%2Bvtq26aA0Pto7iJvlf3wUPjzZAFdHBEMXGuliBLciRmY1gYrBmHc%2FGAGni8cqwV9w7x4nZzxYG%2BgMo4k%2BWyyLhn%2FzpY9EC8%2FIKgrJmFCOWN%2FLrrJk0yFn9MFSwwYy2GbLfLuLB9HqewUU1C40AUwbw3NXOAKvyk8UMX3ru%2FZhP1lLlyNoJ%2BnqsTfZdgh9QjCKGQTcfAUIYvqFX&X-Amz-Signature=3d501cb8ccaaa6056ec9f47ffa88c11cbcc51105002d5483d84500cfde6a5c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

