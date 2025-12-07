---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QLHHCER%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDRyWxyUUg4aP9RtMcQeFnblmV7MZtJnjKouf7dEzSeAiEAvfR3kyyHXEG4hD7o3jUNACcD%2BatfSNaeBlZb3%2FgP95oqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH12%2FJMx7Sn5HdRPaircA9u%2B6jbZpdlHl6UNV2vczN%2BFnztb4XUJvG9ZA2VkjxWN3bPbW6dkAI8CA%2B%2B10X7xyziNQAHBqpCkssrSMIPsL8z%2FzVHTLY9fLvNwgCgt%2FyVmrRC58AK7ZWdruNPIjHgLoGVfND2NUsJ7BCfoGr%2FZZUwlVmqMDedoJWsS49jc5AipTjD%2BxDtTWXlr1ONelfPjyex9kKkORpC5XS%2Bp2l%2FewR4p%2BEM2Q1yRq37Z39xqk4kiETUHr37D%2BilbIQPz%2FRPhb%2FKDx6YKYq1I2X40NoTll4vo6zCS7zDqbpOdMPjSIjXQfBLeVmDsWcMTAZBnKkew0fcd%2BVzYakM61m8ovQr4d6F6b7uqpMEYwKsKFOSJfm3OiYqL4t58b7whfBiG0UWAAFH3RxqPfjR5bFIvog8UX8FgFWulsIS5hn2X13gV619719zRgzryPr3LXdtNgc1Gedb7xjjmYwaJtQqHrbH87f%2BgAdn0h4kxXlow9xDCHb7bpqecfQq5VJRbHYTEaQwLDc%2BhY6NP01h3crYntQ9JAJ1AblXXEtWTDiZlmAJOD1T3hzW2AMa2W%2B7WORCl4IDw%2B5u%2BN8rNcwKgD3sS%2BR%2BRn%2BGoIR7fw0XAjG1LYt9YotyJPR0Z0TebSGWHD9FPMOj90skGOqUBu3y1LtZknFr4VdGsuEQRJsU6iaYkX74sDjlqsHvU76X8vqVtcjLrYyT5pLOEMKvJ%2BcuysmPw1FS26bRTo4gDk7XZA3pYxJ8wytSQinNLn%2BB6D3NRdjs%2Bps3xthCwb6BPJPbt8Ph3DMGjQ3GiECzWDbEZvPQeleGh3pt82zGR2mcuqWWVkk%2FPziz6LqE5czg0lGx2UpF2TVU9yb65rXzuWzyJoHys&X-Amz-Signature=e481e60c7385fb392f6b83cc0d5f0e5de0d705248004aeb25f653b4bcf871740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QLHHCER%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDRyWxyUUg4aP9RtMcQeFnblmV7MZtJnjKouf7dEzSeAiEAvfR3kyyHXEG4hD7o3jUNACcD%2BatfSNaeBlZb3%2FgP95oqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH12%2FJMx7Sn5HdRPaircA9u%2B6jbZpdlHl6UNV2vczN%2BFnztb4XUJvG9ZA2VkjxWN3bPbW6dkAI8CA%2B%2B10X7xyziNQAHBqpCkssrSMIPsL8z%2FzVHTLY9fLvNwgCgt%2FyVmrRC58AK7ZWdruNPIjHgLoGVfND2NUsJ7BCfoGr%2FZZUwlVmqMDedoJWsS49jc5AipTjD%2BxDtTWXlr1ONelfPjyex9kKkORpC5XS%2Bp2l%2FewR4p%2BEM2Q1yRq37Z39xqk4kiETUHr37D%2BilbIQPz%2FRPhb%2FKDx6YKYq1I2X40NoTll4vo6zCS7zDqbpOdMPjSIjXQfBLeVmDsWcMTAZBnKkew0fcd%2BVzYakM61m8ovQr4d6F6b7uqpMEYwKsKFOSJfm3OiYqL4t58b7whfBiG0UWAAFH3RxqPfjR5bFIvog8UX8FgFWulsIS5hn2X13gV619719zRgzryPr3LXdtNgc1Gedb7xjjmYwaJtQqHrbH87f%2BgAdn0h4kxXlow9xDCHb7bpqecfQq5VJRbHYTEaQwLDc%2BhY6NP01h3crYntQ9JAJ1AblXXEtWTDiZlmAJOD1T3hzW2AMa2W%2B7WORCl4IDw%2B5u%2BN8rNcwKgD3sS%2BR%2BRn%2BGoIR7fw0XAjG1LYt9YotyJPR0Z0TebSGWHD9FPMOj90skGOqUBu3y1LtZknFr4VdGsuEQRJsU6iaYkX74sDjlqsHvU76X8vqVtcjLrYyT5pLOEMKvJ%2BcuysmPw1FS26bRTo4gDk7XZA3pYxJ8wytSQinNLn%2BB6D3NRdjs%2Bps3xthCwb6BPJPbt8Ph3DMGjQ3GiECzWDbEZvPQeleGh3pt82zGR2mcuqWWVkk%2FPziz6LqE5czg0lGx2UpF2TVU9yb65rXzuWzyJoHys&X-Amz-Signature=0b0a5d824d9b4c9694bfea7cefd080cff6c0c9b353a7e80112b18c2e1d1050ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

