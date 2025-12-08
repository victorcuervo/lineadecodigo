---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LVE5SCK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC2lmWP38u1%2FiTUu%2Bu3LcxFtl6AiI2Xe%2BpHH4ovp2YygIhAPc24Od3SsronFJsU%2BUpVpdm2Bv4o8K%2BEjRiO5CecDK3KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwPjtJ5Bl9uB8gAzUq3AOZmfqwaDwlkdQyHkziokycmgjuu6vWjiZKjSsiJU%2BPI70y6002%2FFGzHvhJZifp1%2BP6%2Fwrom%2FwIF177Ki5SsApXeQPcqiAP3iQ44Ec2odM97BrQHH1DIILwrOn4bsBytM2RNmUTLNQdTWYiSx2CMTSbA6W%2FZ5JR93YIOVMgfJZJbF2s6Q2ievdMJ0%2BQPd0%2FD2fSces%2FSI3tCS63tKQUQdjuGCiHTo5FbKW9sb0OiYXjHY9gJSXBB3k1eLT%2FsbOMbszyjvrI8HDRieoatIwleGk9UHWAzi5fWWZeLxahopsvgN1nEqACn6%2FtrujTkaT2RheAoz36dMFjjihYvXRC289rMqX6mxuHoOKaCuSo5swEUkKKsAXLpm3joNnzicu49XsPUS8t7TZfHiZ1hEq%2BdT7k%2FMImXLMLVG24UvMyup4aIUY3dpTRxvhHKEifV7sIHS6w7XZRWnYfpmtFr0Fo1koHckVep9V0pyExhUlMWjyfvOvD9AYg0BKN3Hnk3f6B4FdLSwhrgKjF%2FCqPwYvDUmFu5Bm5puP69txMHRtUhdSMuIpX3xu9noR2aXq1thBN%2FqaWr%2FW4p1cahgqJHW%2Baiof5E5QeYwOWUjb%2FTOiPdV8jL%2BarGgZTzXdzOMqAhzCc9NrJBjqkAb7kO5jjgmuXtgblqMXKuNW%2Fch8G%2BG4Btk9Zt3eCDd16Jv6FL%2BSipULb2%2FO9qkt3fTHiZJCDIrSWFADqx%2BNIaorBeIli06tph%2F9fEyOLA99Al8XNCKano6zBcRofIYWoZuGlFlikUUFWdHj8BvTdjwJWUkmmYyLZXgSxUS6Rr6uANxDSH8N258ecGDaxIeeRo7zJiZVNVIRNbrNQUTaizTKPcUpu&X-Amz-Signature=635248a39dd64d7c574eb5ff07804013dc6790130d73fd3ec38b0729d4d68e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LVE5SCK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC2lmWP38u1%2FiTUu%2Bu3LcxFtl6AiI2Xe%2BpHH4ovp2YygIhAPc24Od3SsronFJsU%2BUpVpdm2Bv4o8K%2BEjRiO5CecDK3KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwPjtJ5Bl9uB8gAzUq3AOZmfqwaDwlkdQyHkziokycmgjuu6vWjiZKjSsiJU%2BPI70y6002%2FFGzHvhJZifp1%2BP6%2Fwrom%2FwIF177Ki5SsApXeQPcqiAP3iQ44Ec2odM97BrQHH1DIILwrOn4bsBytM2RNmUTLNQdTWYiSx2CMTSbA6W%2FZ5JR93YIOVMgfJZJbF2s6Q2ievdMJ0%2BQPd0%2FD2fSces%2FSI3tCS63tKQUQdjuGCiHTo5FbKW9sb0OiYXjHY9gJSXBB3k1eLT%2FsbOMbszyjvrI8HDRieoatIwleGk9UHWAzi5fWWZeLxahopsvgN1nEqACn6%2FtrujTkaT2RheAoz36dMFjjihYvXRC289rMqX6mxuHoOKaCuSo5swEUkKKsAXLpm3joNnzicu49XsPUS8t7TZfHiZ1hEq%2BdT7k%2FMImXLMLVG24UvMyup4aIUY3dpTRxvhHKEifV7sIHS6w7XZRWnYfpmtFr0Fo1koHckVep9V0pyExhUlMWjyfvOvD9AYg0BKN3Hnk3f6B4FdLSwhrgKjF%2FCqPwYvDUmFu5Bm5puP69txMHRtUhdSMuIpX3xu9noR2aXq1thBN%2FqaWr%2FW4p1cahgqJHW%2Baiof5E5QeYwOWUjb%2FTOiPdV8jL%2BarGgZTzXdzOMqAhzCc9NrJBjqkAb7kO5jjgmuXtgblqMXKuNW%2Fch8G%2BG4Btk9Zt3eCDd16Jv6FL%2BSipULb2%2FO9qkt3fTHiZJCDIrSWFADqx%2BNIaorBeIli06tph%2F9fEyOLA99Al8XNCKano6zBcRofIYWoZuGlFlikUUFWdHj8BvTdjwJWUkmmYyLZXgSxUS6Rr6uANxDSH8N258ecGDaxIeeRo7zJiZVNVIRNbrNQUTaizTKPcUpu&X-Amz-Signature=2a4326ada956694a10c1ea657211795da1dd58c67c2445e106af92658ddff91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

