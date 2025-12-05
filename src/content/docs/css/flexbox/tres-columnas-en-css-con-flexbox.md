---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4TSLYS5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHugV7FThvP6LJy9hIRsvkEKIHbwYlA4%2F3zfxZSyF9utAiAdJRQO%2Bp6c7rAN0oyaKwvucgVuXfl%2FjIXw5SF6f9fonir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMQmuwhn9wRXAfoCbsKtwDCA4Zs%2BR%2BKbk%2B7t1Qt3ockwwDpvglL%2FvkbkBWkyRQ1UOJMpIl%2BGSkEPMazY%2FMnlGyUai28LcGqGDJ78hyS6eThAka9zDWmOZnUKm9HX9lX09Og5bgSC4JuTxDPb6UM9tob7%2B%2FdTp1olCZdhXI1QWXfEH2tNV97XMHl8D54BorC9VcaDE3LMUtO1Pa%2BWnv7pWB%2BiBh9bvaw2KooY4gM2P378zuvsRPWoxPXTGDHYV2AwaOFJJCJ73VzDslYtQPIyl6eRGNpvoOg530yQRG7FrWqpdEn8C4rPDdiAfMk3HYZtJasrcb%2BsNdlVhlQ1X9H7le26eGzkqNdKAh4PTVYLu31zIRR5almIT8tsk6UjFKNBp38pUa1shcCBAk2PhItfhLVnOODrkWvtSD0GotVL4A4ZbXUCNvoTmKBKqWIZBzCCg%2FOYP7iw9qjc0dzsx%2Fde%2FqwuqpCzU%2BZLTHYfFd7BxaU%2BZ0r1S1x6Vk7QpStP%2B8OP%2B%2FzwdXDpiNfLojc9tG5JHyAGLq38Usnju17HLwMsbd50Ue97hT44QJ6DqoEE1%2F1i2BKY3JoRl2uE%2BaMrtlI01pSgzzj8z9WNqODzENRe7mHvAkah%2BVv%2Bx1f3VOyFTIBAl5YIk4w07i289yzHgw7%2FzLyQY6pgH5yn7zn7LC2uOPVehlUibY8A%2BMk%2BdN0XrSXFTBiaHwsXYej6sSnf4ww%2BHyob8prg7dFK%2BF7QXdodCM0pWCQ3GQyWsuW2kD2xEhbXXZbyRoj5v%2F822W0PUDkw4zjSYR%2FPGFNnZESjNttjphNcg6%2Fva%2FH4KBl249rbVMQy0qeBfvy48u6vX%2FKdbkuG79CoKssk0NzS8vNjaohFIVz6ilExZcgOqvV345&X-Amz-Signature=a3b9a3f7a474255fc05316c143fc5f8dde38e7f28b2fc035eb41ce962047d704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4TSLYS5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHugV7FThvP6LJy9hIRsvkEKIHbwYlA4%2F3zfxZSyF9utAiAdJRQO%2Bp6c7rAN0oyaKwvucgVuXfl%2FjIXw5SF6f9fonir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMQmuwhn9wRXAfoCbsKtwDCA4Zs%2BR%2BKbk%2B7t1Qt3ockwwDpvglL%2FvkbkBWkyRQ1UOJMpIl%2BGSkEPMazY%2FMnlGyUai28LcGqGDJ78hyS6eThAka9zDWmOZnUKm9HX9lX09Og5bgSC4JuTxDPb6UM9tob7%2B%2FdTp1olCZdhXI1QWXfEH2tNV97XMHl8D54BorC9VcaDE3LMUtO1Pa%2BWnv7pWB%2BiBh9bvaw2KooY4gM2P378zuvsRPWoxPXTGDHYV2AwaOFJJCJ73VzDslYtQPIyl6eRGNpvoOg530yQRG7FrWqpdEn8C4rPDdiAfMk3HYZtJasrcb%2BsNdlVhlQ1X9H7le26eGzkqNdKAh4PTVYLu31zIRR5almIT8tsk6UjFKNBp38pUa1shcCBAk2PhItfhLVnOODrkWvtSD0GotVL4A4ZbXUCNvoTmKBKqWIZBzCCg%2FOYP7iw9qjc0dzsx%2Fde%2FqwuqpCzU%2BZLTHYfFd7BxaU%2BZ0r1S1x6Vk7QpStP%2B8OP%2B%2FzwdXDpiNfLojc9tG5JHyAGLq38Usnju17HLwMsbd50Ue97hT44QJ6DqoEE1%2F1i2BKY3JoRl2uE%2BaMrtlI01pSgzzj8z9WNqODzENRe7mHvAkah%2BVv%2Bx1f3VOyFTIBAl5YIk4w07i289yzHgw7%2FzLyQY6pgH5yn7zn7LC2uOPVehlUibY8A%2BMk%2BdN0XrSXFTBiaHwsXYej6sSnf4ww%2BHyob8prg7dFK%2BF7QXdodCM0pWCQ3GQyWsuW2kD2xEhbXXZbyRoj5v%2F822W0PUDkw4zjSYR%2FPGFNnZESjNttjphNcg6%2Fva%2FH4KBl249rbVMQy0qeBfvy48u6vX%2FKdbkuG79CoKssk0NzS8vNjaohFIVz6ilExZcgOqvV345&X-Amz-Signature=46e0498fb483d420eadbefa5163234507b4c6592d424471b583ac2dc62248588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

