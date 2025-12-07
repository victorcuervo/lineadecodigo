---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FK6GHBO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvJMgixvJ61yPO17TrJvk7jdWUzaTrqhCSP7WkkSk3RgIgA3psG52dtEyw7vdHdeHTAtPVErR9PWBp0vgAsgxcIgsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGobycDkqoj%2FPHN%2B4yrcA0XDEbUzaeamUtGDunlVpBpZiN887bzsmiJLS7QnFT1dEJ9l0IUSVcv1Ttaml0LrhXZDcxruGj5wBnUgE4X6g%2F9mGD1w0fQ4aQFZd7TZTno3PJztfahzyVkWvM3ez0fSyyuMM36q4Rc%2FSR4Dp%2FDjbly90s9npx72wjvKMmh8q4prr2XIiFNgSQMUhwqluXXPrJxwMjKU7WLIyUPNO%2BZHJCK9wkLMB2uIrHMQXjp%2FeVWzFDLuDdPUohdpHutjW1pUAcPyCfQqBc%2Fsv6j3vZfNvO1n8z778%2BdT1fDB8xDDi8kUNJnycUV04HCd4GUWQd2MAW%2FGLtVQoKItrNx8Ah9GpySNzMV5xQALiulPQhRx0bz88TBkN0pzLrf%2FHjcSo%2Fax98NkkOiz4OLfFVoNiPbwRvp0CkP5pQaW4sDVo7YU1J8VCnuqaZwh9BveucrdYjS%2F8t0PtC%2BPYuYtQp71qTVJmuJGqGkqpc5sjyzZqdpsaGP5B0nIjjylVqUQVpnfYvVpXrKZGEtl6lmuGsNeviik5%2Bj%2ByktAQm4BYgnJ5T9qbqMpvPHGR7evUzB4icX%2FtjqAie1NQMqvZhkZwmmL1lMPDPiD79Bfw5n71SCdi4bet7UtRqSD%2FC6RAEou4qfyMMCa1ckGOqUB66QgCitXublRv4BTEUIPVB3vtRS%2Fr%2BXDu1SGwZcviKurOFBQCKanpk2DKFU03GLNIqlsF1YXQbha5UkyMNqU7m8nO%2BxuYzcoq0LK8BK01yYbwgRgoDIx227ah6QNq%2BWYSKSJxotsdg4kxigbvEQGSPhylQTCE7%2B85xPmWH19fiDdfioXtMQfDgVXWsAI0Bv0A50xVkK1YXEnh%2Bxwhg4FX7mzKy69&X-Amz-Signature=c1262487ebd0980c1789e727455a8f17f3d7e97419a290b43e58cfd94a043cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FK6GHBO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvJMgixvJ61yPO17TrJvk7jdWUzaTrqhCSP7WkkSk3RgIgA3psG52dtEyw7vdHdeHTAtPVErR9PWBp0vgAsgxcIgsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGobycDkqoj%2FPHN%2B4yrcA0XDEbUzaeamUtGDunlVpBpZiN887bzsmiJLS7QnFT1dEJ9l0IUSVcv1Ttaml0LrhXZDcxruGj5wBnUgE4X6g%2F9mGD1w0fQ4aQFZd7TZTno3PJztfahzyVkWvM3ez0fSyyuMM36q4Rc%2FSR4Dp%2FDjbly90s9npx72wjvKMmh8q4prr2XIiFNgSQMUhwqluXXPrJxwMjKU7WLIyUPNO%2BZHJCK9wkLMB2uIrHMQXjp%2FeVWzFDLuDdPUohdpHutjW1pUAcPyCfQqBc%2Fsv6j3vZfNvO1n8z778%2BdT1fDB8xDDi8kUNJnycUV04HCd4GUWQd2MAW%2FGLtVQoKItrNx8Ah9GpySNzMV5xQALiulPQhRx0bz88TBkN0pzLrf%2FHjcSo%2Fax98NkkOiz4OLfFVoNiPbwRvp0CkP5pQaW4sDVo7YU1J8VCnuqaZwh9BveucrdYjS%2F8t0PtC%2BPYuYtQp71qTVJmuJGqGkqpc5sjyzZqdpsaGP5B0nIjjylVqUQVpnfYvVpXrKZGEtl6lmuGsNeviik5%2Bj%2ByktAQm4BYgnJ5T9qbqMpvPHGR7evUzB4icX%2FtjqAie1NQMqvZhkZwmmL1lMPDPiD79Bfw5n71SCdi4bet7UtRqSD%2FC6RAEou4qfyMMCa1ckGOqUB66QgCitXublRv4BTEUIPVB3vtRS%2Fr%2BXDu1SGwZcviKurOFBQCKanpk2DKFU03GLNIqlsF1YXQbha5UkyMNqU7m8nO%2BxuYzcoq0LK8BK01yYbwgRgoDIx227ah6QNq%2BWYSKSJxotsdg4kxigbvEQGSPhylQTCE7%2B85xPmWH19fiDdfioXtMQfDgVXWsAI0Bv0A50xVkK1YXEnh%2Bxwhg4FX7mzKy69&X-Amz-Signature=32a82b22f875f0072f28f1b8fd9f4dc76ed706e7710dbe99dc61e6ddb9560c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

