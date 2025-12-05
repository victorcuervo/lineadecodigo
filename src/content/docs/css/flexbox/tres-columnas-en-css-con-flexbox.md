---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466557NUR2G%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk9K5a5jWRvbeshPrzE67%2BL1UnMG76093u3t2yaTJecwIhAN4Iz14yENBPDdFyT%2BrzlIrUsmq%2F7HzjrYpbQ95f8QfFKv8DCFsQABoMNjM3NDIzMTgzODA1IgyyKuryv2eDpEJ8d7gq3AMRGJC1kyG0HDJKya6pgD8NdjFJuAaItjsunHXMTTBeUaMtBoBsa00CTPjXKgci5o%2BLhB3to%2FS%2FX1QpfsvWRVRY11pe%2B0xmPJ%2BoOzkVuzydA6JCHKy5kD735w9eqmPlA1QUtjUGU%2F%2FyDoqjiOMde1j16lVwDesbHNQKebdHXx%2BUQbhx6dx1h%2F5J8lZsH4wQFeqkVCtEHgO04ocwtLK1p1%2FDjr4SwqTN4KrBDp%2BKe5hXTU3lCmU13ckR2hfjOf%2F1p0Cdu%2BjFSjfuQ6A4UFlN2agzZ9CRWGEGondexPFKenYamx12jEnr6x11nZiu26PVcolyDm9H23srBwttsLmOxH1lnHHyqW32d%2BBEDC2wc3YrGY4TSHbg%2FMWFKjSnL0k4%2Foovt5rRd62awRfrmgHcMqPDzFwsS2ocJqqQkYEhUhep7UySpCaSYF%2FrPX9DfWU5WPaHDiCCoq7gdTTguFdgb3Ty53LudDOaPLr5WGHZc9dy9k2Zyk0XwBMc8Gl%2FumCCA%2F%2FgRp7OT0nMG4iEDyMs%2BQprobVWCCmhZUxM7lbdtxdQz8YhPMKepHEjijlCl605LLmwq%2B9bMMorjbaHfz3W3rzWUInWW6GYcy1z4a1vR%2Fw2WeaKCrvZJVZlBXJF0TCL1MrJBjqkARhDCyu9Hp7HqF9IwFP38a5rq55Cth%2FnQwjvZz03hIoLUjgaWnL33wRE72SPxOoo2brasIneao0%2FSofaIekx6Q2sBLCZaC4I%2Bh2QgCkrMNYmOI%2BetHp1t61TZ28hPc3SKh%2FPdacM31ehLDbOk16s9By7pmUxIOI5WjWp0z0DKa6tIq6kfGQXP5hKk9kbhySFxuLvwYbQrvqKSCssN0befhkGdNDr&X-Amz-Signature=6877df0858ebe2687bbdff2b8f94da60ef2feaf87ef2e9c7e1b2ccf8bc5edb52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466557NUR2G%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk9K5a5jWRvbeshPrzE67%2BL1UnMG76093u3t2yaTJecwIhAN4Iz14yENBPDdFyT%2BrzlIrUsmq%2F7HzjrYpbQ95f8QfFKv8DCFsQABoMNjM3NDIzMTgzODA1IgyyKuryv2eDpEJ8d7gq3AMRGJC1kyG0HDJKya6pgD8NdjFJuAaItjsunHXMTTBeUaMtBoBsa00CTPjXKgci5o%2BLhB3to%2FS%2FX1QpfsvWRVRY11pe%2B0xmPJ%2BoOzkVuzydA6JCHKy5kD735w9eqmPlA1QUtjUGU%2F%2FyDoqjiOMde1j16lVwDesbHNQKebdHXx%2BUQbhx6dx1h%2F5J8lZsH4wQFeqkVCtEHgO04ocwtLK1p1%2FDjr4SwqTN4KrBDp%2BKe5hXTU3lCmU13ckR2hfjOf%2F1p0Cdu%2BjFSjfuQ6A4UFlN2agzZ9CRWGEGondexPFKenYamx12jEnr6x11nZiu26PVcolyDm9H23srBwttsLmOxH1lnHHyqW32d%2BBEDC2wc3YrGY4TSHbg%2FMWFKjSnL0k4%2Foovt5rRd62awRfrmgHcMqPDzFwsS2ocJqqQkYEhUhep7UySpCaSYF%2FrPX9DfWU5WPaHDiCCoq7gdTTguFdgb3Ty53LudDOaPLr5WGHZc9dy9k2Zyk0XwBMc8Gl%2FumCCA%2F%2FgRp7OT0nMG4iEDyMs%2BQprobVWCCmhZUxM7lbdtxdQz8YhPMKepHEjijlCl605LLmwq%2B9bMMorjbaHfz3W3rzWUInWW6GYcy1z4a1vR%2Fw2WeaKCrvZJVZlBXJF0TCL1MrJBjqkARhDCyu9Hp7HqF9IwFP38a5rq55Cth%2FnQwjvZz03hIoLUjgaWnL33wRE72SPxOoo2brasIneao0%2FSofaIekx6Q2sBLCZaC4I%2Bh2QgCkrMNYmOI%2BetHp1t61TZ28hPc3SKh%2FPdacM31ehLDbOk16s9By7pmUxIOI5WjWp0z0DKa6tIq6kfGQXP5hKk9kbhySFxuLvwYbQrvqKSCssN0befhkGdNDr&X-Amz-Signature=99fb3967b892390616d28ab46bc57bc901924357299041e565047153ea7ffb07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

