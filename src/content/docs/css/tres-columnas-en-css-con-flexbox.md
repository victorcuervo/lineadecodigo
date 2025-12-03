---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RSTT2DD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJFMEMCIDuNYSkUJ9vbT0nJ3c%2FzTerses3BEvniylV8IsgH4Mj0Ah8tf3IV9fVrPQqOi3YD36b3tjvXxmGd5cPSCFPIdaJ6Kv8DCDYQABoMNjM3NDIzMTgzODA1Igz0%2B%2BWFMCOKsjJsyQIq3AMYiz2OMD6RGFdzWNbp57V5RmUclJIGjVRPUUO3WH46%2FGOHwoxLSfPC1WaLrRmNr%2FOoisOozQCLF2vT6Wj9tiI6XYJPpROM8bhmQ1L6qiK6VUBklCENZVay4cXZn58bu06yKH7fLfsvDH0fQuQTj58B8LduUHDqTadpuAIqofuQpzoHaQvbgEaI6eHcWEslGGzCy%2FkhSa7EO18D6nXo3R5%2F8hvEz0AvUhj20cM5%2BfZmZ3%2Fw4f8paX1yv2R%2BfO4cejRjkQr5oCJk6Y31RLxRfuwN%2FeoeRVSeuzTp5JYiLyrdMQC6v164GBLYhBXnGSTWK3wdzYc3f%2FQd%2Fds0Hwh1l5lN6PlQ6RxRkGbrhD52%2FoshQI3OkeFf3PxKD6atzkPnH9tuLZ3gNXSiv%2BvdqJHZqh4WAK4fwVOel8vM%2Fsh7Jaeydixv5NAgqzESxvf9CWersFQWiQf2v8t6ZCW%2B2ZMLEoPnrmqC9ikDJMkduIY1OE5SpdTS46Iuk7LOkEJZ1L0lFqsLamApxXR9jKvxjnJJLF4Ff1NK2K9SN%2FVDEEj%2B75F6dSdtxJwLHSbKp2RVjeI3sm8Vz4F4J%2BzBxZEs1rPOH0pgw90Qk32nEwpEd2NCULwdXyVBHcih5LfBP%2B11djCnvcLJBjqnAWnjazJSh15Zj%2BbT39rDyOWqx%2BMWOrfpzunEezbt%2FLwFKNTfPeCHCsek%2FSSKyuhem%2BxF4BIB0mZVDIvbQWYtPs6vcFZJP0iNT5b7%2BVispmvuqATFU4AEk99%2FhpsGf1wf91S%2Bn6T3jUUcHkq%2FJ1YxOFsQVXOdowHSt5dpgw79rTx4GYEv8XxE0vK%2BaWJIQGd%2FoF0qi%2FCvvBExjQi3%2Bdn6GghCHUo1yNNS&X-Amz-Signature=adb225c8f228f7289e4b977b54326cb3346eef728210105446b57a1f75d79dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RSTT2DD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJFMEMCIDuNYSkUJ9vbT0nJ3c%2FzTerses3BEvniylV8IsgH4Mj0Ah8tf3IV9fVrPQqOi3YD36b3tjvXxmGd5cPSCFPIdaJ6Kv8DCDYQABoMNjM3NDIzMTgzODA1Igz0%2B%2BWFMCOKsjJsyQIq3AMYiz2OMD6RGFdzWNbp57V5RmUclJIGjVRPUUO3WH46%2FGOHwoxLSfPC1WaLrRmNr%2FOoisOozQCLF2vT6Wj9tiI6XYJPpROM8bhmQ1L6qiK6VUBklCENZVay4cXZn58bu06yKH7fLfsvDH0fQuQTj58B8LduUHDqTadpuAIqofuQpzoHaQvbgEaI6eHcWEslGGzCy%2FkhSa7EO18D6nXo3R5%2F8hvEz0AvUhj20cM5%2BfZmZ3%2Fw4f8paX1yv2R%2BfO4cejRjkQr5oCJk6Y31RLxRfuwN%2FeoeRVSeuzTp5JYiLyrdMQC6v164GBLYhBXnGSTWK3wdzYc3f%2FQd%2Fds0Hwh1l5lN6PlQ6RxRkGbrhD52%2FoshQI3OkeFf3PxKD6atzkPnH9tuLZ3gNXSiv%2BvdqJHZqh4WAK4fwVOel8vM%2Fsh7Jaeydixv5NAgqzESxvf9CWersFQWiQf2v8t6ZCW%2B2ZMLEoPnrmqC9ikDJMkduIY1OE5SpdTS46Iuk7LOkEJZ1L0lFqsLamApxXR9jKvxjnJJLF4Ff1NK2K9SN%2FVDEEj%2B75F6dSdtxJwLHSbKp2RVjeI3sm8Vz4F4J%2BzBxZEs1rPOH0pgw90Qk32nEwpEd2NCULwdXyVBHcih5LfBP%2B11djCnvcLJBjqnAWnjazJSh15Zj%2BbT39rDyOWqx%2BMWOrfpzunEezbt%2FLwFKNTfPeCHCsek%2FSSKyuhem%2BxF4BIB0mZVDIvbQWYtPs6vcFZJP0iNT5b7%2BVispmvuqATFU4AEk99%2FhpsGf1wf91S%2Bn6T3jUUcHkq%2FJ1YxOFsQVXOdowHSt5dpgw79rTx4GYEv8XxE0vK%2BaWJIQGd%2FoF0qi%2FCvvBExjQi3%2Bdn6GghCHUo1yNNS&X-Amz-Signature=e2c34c2b4844d8cfef0cbcd239c5848747727257384f23797cf81ef140a08000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

