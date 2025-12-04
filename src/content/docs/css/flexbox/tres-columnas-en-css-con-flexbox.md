---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CNZTWVB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDbmt9zZxokk4Lxm2Tmxs%2F2z8QiJlEPJspOkWJE25ovVAiBMU%2FwMIlkMx113vA6K27ke1p5%2FcX84VvNuTU2fEmGocir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMOp%2F5%2BLSYaD7wVq%2FsKtwDIMn9e9jg36V7Ni8Sh3t2xkcR0BCQUFU%2B14N%2FIty5F5TlHWEPkilCUXTXVAZ%2Fi%2BLCceu7Gb2GYzcYGzBuwjnoLDyq5Llrg69aAjyCfNN0DPIXNdR9YwjZokijoy2WzM4QaABrjrRswfGcnA0qsfsLmdM1LhE45cVXqyqZMpcXHmnF1Udkm57SAKB%2Bh1x0CrFIsQvjVr1H2DZ8UzZKhSxTz1xz99K1MBXB1xjTGJo4pUWsMIVOW2AqcdDDAF9%2F3zaO%2FohMQfzvaS%2BQ2KHYxc3N7rWdDjwISpUvoitZFDMB%2FNBJD4Wpa58WqOqiYhEBM2tkhQ%2FhOBMbijEJ7Qtw8W3gErkY71yvlAxbN7Rl8LoQtGOo%2BWFvARSX5AfHjY1WG%2BxoFOzRF4SYTT8XAIl4hFxtoENes8sycebLBwWpjGHZOCk1Re66pYegsXBIOaoKOjv2Z%2FG0pfzWZWIr9KX%2BRuJ9m1IBg%2FadkHlb03hYZ0tHZFVXa3tG86q%2Bcb%2BsNtC3gOHiiq1Fw0z%2BLCtAraJUc%2BESSXF%2FCAA7xVwmWnreKc9qFry6zyZ4h%2F8fTFyH6RZVJ29abHHJzf7erdAnuT0%2Fy%2BGXI24PAGqLnCQ8CVpFJtbFFzzFkF4KR%2FWOwyCyj54wza3EyQY6pgEUMGa%2FRr6WLZJXt1remkcv378fvWS1yB1NgvEjDS7iZ4h0bbS6bHVmKUUnG3eSBTuHzLOXQRu9BhUrQz1SX24tZ50mNqHFXGajhKUsw7y000pfBGK07Py%2B0AaBOAEEnCtOI44U9BiZ3grnmGZ%2FExEjlq8zbqs5WhQEmG70YbOSxD7EiXxmnuOu0ImXdckmgLNizM1biTFIJFJUyea%2B3%2BrWqI8OrPIT&X-Amz-Signature=934d49dd08a2e78f41d649c3b38b011cead0ff7713198118d8192b41f666a404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CNZTWVB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDbmt9zZxokk4Lxm2Tmxs%2F2z8QiJlEPJspOkWJE25ovVAiBMU%2FwMIlkMx113vA6K27ke1p5%2FcX84VvNuTU2fEmGocir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMOp%2F5%2BLSYaD7wVq%2FsKtwDIMn9e9jg36V7Ni8Sh3t2xkcR0BCQUFU%2B14N%2FIty5F5TlHWEPkilCUXTXVAZ%2Fi%2BLCceu7Gb2GYzcYGzBuwjnoLDyq5Llrg69aAjyCfNN0DPIXNdR9YwjZokijoy2WzM4QaABrjrRswfGcnA0qsfsLmdM1LhE45cVXqyqZMpcXHmnF1Udkm57SAKB%2Bh1x0CrFIsQvjVr1H2DZ8UzZKhSxTz1xz99K1MBXB1xjTGJo4pUWsMIVOW2AqcdDDAF9%2F3zaO%2FohMQfzvaS%2BQ2KHYxc3N7rWdDjwISpUvoitZFDMB%2FNBJD4Wpa58WqOqiYhEBM2tkhQ%2FhOBMbijEJ7Qtw8W3gErkY71yvlAxbN7Rl8LoQtGOo%2BWFvARSX5AfHjY1WG%2BxoFOzRF4SYTT8XAIl4hFxtoENes8sycebLBwWpjGHZOCk1Re66pYegsXBIOaoKOjv2Z%2FG0pfzWZWIr9KX%2BRuJ9m1IBg%2FadkHlb03hYZ0tHZFVXa3tG86q%2Bcb%2BsNtC3gOHiiq1Fw0z%2BLCtAraJUc%2BESSXF%2FCAA7xVwmWnreKc9qFry6zyZ4h%2F8fTFyH6RZVJ29abHHJzf7erdAnuT0%2Fy%2BGXI24PAGqLnCQ8CVpFJtbFFzzFkF4KR%2FWOwyCyj54wza3EyQY6pgEUMGa%2FRr6WLZJXt1remkcv378fvWS1yB1NgvEjDS7iZ4h0bbS6bHVmKUUnG3eSBTuHzLOXQRu9BhUrQz1SX24tZ50mNqHFXGajhKUsw7y000pfBGK07Py%2B0AaBOAEEnCtOI44U9BiZ3grnmGZ%2FExEjlq8zbqs5WhQEmG70YbOSxD7EiXxmnuOu0ImXdckmgLNizM1biTFIJFJUyea%2B3%2BrWqI8OrPIT&X-Amz-Signature=b7c23bea826da02293f94c695fc44efa297969877d2ba27bbbde9b2412dfbbbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

