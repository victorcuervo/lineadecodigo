---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2DRADH6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUPI0BuUzcJ5sgghYhXDAnofL6FaCkm%2FEcnwiGbXYFNAiAHCfXICtbPBDoz6Y2ehzXMYro18xH8Fg3BRZEW9bVPHir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMG6afApWL7%2BmAfeSdKtwDu4ud7QRZwPq7xmdqPpiYwsDlXYz%2BuodRq4WIR04Qejf5xInr%2BEqojd4As6EQrmjcvUdsKcd6XZ0ublWyO9FtoVUl8JMRi6AdRNLTmlPFDuKjS8J%2B4eWRdQtguqACp48AuFyuHBAW1C3CCA0nNqFJj1xwML8%2B%2BNf4FD9oHbkrJs48DSdZWEkxaO%2BSPKfAoMha1MLuyuE7ZXOfe2%2B%2Byq2pcNxj2irv%2FePXyXbHCMODC9yzeyhbJ8f3rZp%2FaheFdXWrGqY4N4z2Et6kpDAvKKPad2ksROOzDnzk9Z2dxec6ZqpkI3nmn3K020JTW0N7GXoPfkPjDE5wYmo%2BPW63LTWbu0xn17ZdCnGyn5wCvEwNpEG%2FTCBKc1gspgMmKkahKkqI1EXk73tmUB5ekvtTuULOHcZlMZrdA3HJN6CLUcRrjig3wlca12rZHSRb3kH7BI%2Fx3O34GIAm37ursU%2BjpVq0vhpakyR6CIA1784te414d1OCE3uqQFkAORMZmRQxDwznf3uWDL3BER8Vy7ZnxAulKlgkPFf%2FKSOZb%2BUlF%2BgpR8VHHwGeVR0asyXic8FVqvVEDfDtJyMAveqXGqbcNmoOvn0xIOqQMt5yHuaXxFSB7UlA3zWDV0v2Jvy4xC8woqzJyQY6pgHXVe5A5mnroBXGl5ax2LjhjBkqA%2FlPHwXbfdHSipYtcAH3PpAg6lYsW1WduvOBbtkCaBLsNwohPkG3rst%2BuN%2BsWpEoaiPsAUtoYjewhaBl2mPjnqjhDXt%2F2%2FfVo8%2Bz9azLm5RmoP1SZftxf4Q8I%2F%2BS3z5enzvch4tNG9C4KSXrXuezps%2BS%2Fou0d1YKQ7t5aeVO01qMFFh1Dwp2vTxrQpi0sqNdhoPg&X-Amz-Signature=0de2d66a2f5fcc35aee32dc168bd3cf9bb3ca7ee7a09c0ffa7965ad2d7b65d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2DRADH6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUPI0BuUzcJ5sgghYhXDAnofL6FaCkm%2FEcnwiGbXYFNAiAHCfXICtbPBDoz6Y2ehzXMYro18xH8Fg3BRZEW9bVPHir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMG6afApWL7%2BmAfeSdKtwDu4ud7QRZwPq7xmdqPpiYwsDlXYz%2BuodRq4WIR04Qejf5xInr%2BEqojd4As6EQrmjcvUdsKcd6XZ0ublWyO9FtoVUl8JMRi6AdRNLTmlPFDuKjS8J%2B4eWRdQtguqACp48AuFyuHBAW1C3CCA0nNqFJj1xwML8%2B%2BNf4FD9oHbkrJs48DSdZWEkxaO%2BSPKfAoMha1MLuyuE7ZXOfe2%2B%2Byq2pcNxj2irv%2FePXyXbHCMODC9yzeyhbJ8f3rZp%2FaheFdXWrGqY4N4z2Et6kpDAvKKPad2ksROOzDnzk9Z2dxec6ZqpkI3nmn3K020JTW0N7GXoPfkPjDE5wYmo%2BPW63LTWbu0xn17ZdCnGyn5wCvEwNpEG%2FTCBKc1gspgMmKkahKkqI1EXk73tmUB5ekvtTuULOHcZlMZrdA3HJN6CLUcRrjig3wlca12rZHSRb3kH7BI%2Fx3O34GIAm37ursU%2BjpVq0vhpakyR6CIA1784te414d1OCE3uqQFkAORMZmRQxDwznf3uWDL3BER8Vy7ZnxAulKlgkPFf%2FKSOZb%2BUlF%2BgpR8VHHwGeVR0asyXic8FVqvVEDfDtJyMAveqXGqbcNmoOvn0xIOqQMt5yHuaXxFSB7UlA3zWDV0v2Jvy4xC8woqzJyQY6pgHXVe5A5mnroBXGl5ax2LjhjBkqA%2FlPHwXbfdHSipYtcAH3PpAg6lYsW1WduvOBbtkCaBLsNwohPkG3rst%2BuN%2BsWpEoaiPsAUtoYjewhaBl2mPjnqjhDXt%2F2%2FfVo8%2Bz9azLm5RmoP1SZftxf4Q8I%2F%2BS3z5enzvch4tNG9C4KSXrXuezps%2BS%2Fou0d1YKQ7t5aeVO01qMFFh1Dwp2vTxrQpi0sqNdhoPg&X-Amz-Signature=3bbba333d24d16bc97a0b476bcf0d014daed3b71bb8f976ee4f699d714ebd9d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

