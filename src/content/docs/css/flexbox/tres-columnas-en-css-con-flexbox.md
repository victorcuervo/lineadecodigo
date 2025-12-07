---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JGQV2XW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FhbwC4YFLWrTsui4XHpiIZ6Hw9m3WxsEoAUBdM1Fv9QIgOf2CaWJT2nRZCzzjLCOFsmHxqAsmGPU8SAHuZbeUdMAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4ci9XPgLlMhcElrSrcA2RYRAQfTb0yANQGJipIorozTrAr3f3el5%2BhxlztqEWogyq9zUy6IKpj51ZYg9cCaNn4nzrajaIzhBzA7avIslmUAX70kF3gXcAATcBz6eXBtCHyGytPdr7Jj3DZqVciKUHj%2B4ht76k6OEGQ%2FKqGSoVibhRGiAj1qKRLjtOnRQCzJbaGywsmUKcfHXy5CglG20ShnP5AHyyjC0RFvH9bVhIex2PxytoGPqdFHjVX52NwTyZWgtEC4O8kdQTz8ZLIdd3NW3yDCpPz39eWrxes093tQwjNc2Pk1CIjFkyykek6yXXgU1d0cllKulJ2jK1v0nqKkb%2FRgbJkwMotVJz6wQJyWoU08M6PijGnkZy%2FpOViSV%2FXO0iIPnbQObMTwHgh3z%2FmZvwUWtUpqWvxfx5NV9hT39W%2BZQpnmGa2DykPYQxx%2BgvDjMB0zJXa9pp7NmrCccsS3kmo0AiTv7nPeSPT%2FaLoCf40LaBYqx32XcyjNYU8%2F%2F0Ys6XWpjF4Ai%2B2jZHV1v8nniRrER89dXagpEAcbd%2BuAHqeQmnxAsabvbPO8E%2F2gOp64j7nuqVYWtVKjhY4Xr%2Ft8Sv1CvnapNXihMvX7oX2M8%2B2r2xdt7z295FGfcN7jeTzBWdQzmD2Ml59MK6z1skGOqUBxe6H37AcBy%2Bp5rHwq2P7y4GBj9mKp6PWmzrICzvjPlF00Veki9xZqbSHaI5Qq%2F%2B5tMbjfTqXaO7KQtbMLsWSic6kVP1uGj7CgOYh3k4tSXJiuiK0vjfjXBiRmN1RYS%2FgwX4aKzeH24jYQrSVMoCUU%2Fec34B9SLwNavfdDaXOxOkxtJnGaKRKDcQpooqID7dgcAeAVu1cti%2FebAK2%2FWN9xo80IUh7&X-Amz-Signature=c4fcb7ca91fc8f3a1ce527aa631956f7b58b65089993be20fa3cb72436c34b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JGQV2XW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FhbwC4YFLWrTsui4XHpiIZ6Hw9m3WxsEoAUBdM1Fv9QIgOf2CaWJT2nRZCzzjLCOFsmHxqAsmGPU8SAHuZbeUdMAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4ci9XPgLlMhcElrSrcA2RYRAQfTb0yANQGJipIorozTrAr3f3el5%2BhxlztqEWogyq9zUy6IKpj51ZYg9cCaNn4nzrajaIzhBzA7avIslmUAX70kF3gXcAATcBz6eXBtCHyGytPdr7Jj3DZqVciKUHj%2B4ht76k6OEGQ%2FKqGSoVibhRGiAj1qKRLjtOnRQCzJbaGywsmUKcfHXy5CglG20ShnP5AHyyjC0RFvH9bVhIex2PxytoGPqdFHjVX52NwTyZWgtEC4O8kdQTz8ZLIdd3NW3yDCpPz39eWrxes093tQwjNc2Pk1CIjFkyykek6yXXgU1d0cllKulJ2jK1v0nqKkb%2FRgbJkwMotVJz6wQJyWoU08M6PijGnkZy%2FpOViSV%2FXO0iIPnbQObMTwHgh3z%2FmZvwUWtUpqWvxfx5NV9hT39W%2BZQpnmGa2DykPYQxx%2BgvDjMB0zJXa9pp7NmrCccsS3kmo0AiTv7nPeSPT%2FaLoCf40LaBYqx32XcyjNYU8%2F%2F0Ys6XWpjF4Ai%2B2jZHV1v8nniRrER89dXagpEAcbd%2BuAHqeQmnxAsabvbPO8E%2F2gOp64j7nuqVYWtVKjhY4Xr%2Ft8Sv1CvnapNXihMvX7oX2M8%2B2r2xdt7z295FGfcN7jeTzBWdQzmD2Ml59MK6z1skGOqUBxe6H37AcBy%2Bp5rHwq2P7y4GBj9mKp6PWmzrICzvjPlF00Veki9xZqbSHaI5Qq%2F%2B5tMbjfTqXaO7KQtbMLsWSic6kVP1uGj7CgOYh3k4tSXJiuiK0vjfjXBiRmN1RYS%2FgwX4aKzeH24jYQrSVMoCUU%2Fec34B9SLwNavfdDaXOxOkxtJnGaKRKDcQpooqID7dgcAeAVu1cti%2FebAK2%2FWN9xo80IUh7&X-Amz-Signature=5abdb2c5abe2ce62a41d9fec8d0560ff91f4ad8d1d0da8aa9f55214847b18a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

