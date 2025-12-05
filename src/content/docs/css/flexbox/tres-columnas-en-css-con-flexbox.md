---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T3UJT2P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdRYstVMw61%2Bs8xyEhu%2BFDlBZLQBRJWd77%2BMMMeaP15AiBo6XScTugIl8V%2Fd9A8icUguVBWmopuaYjQOZJ2ADSPECr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMjgtCutIRCCxSpw%2FFKtwDuUtuM%2B3MeWHTOjxLGfKnnDp9SArMTQX0TWLA5FWdoR0fUK4e980oEK5eOlWNTMEUXQi2ZSoK7flfkKFbqYSBbE8ET6Qhep%2FwE1PFJPVrescr1pXLANnMyMp93ko%2B6o5e2K8%2BZ7glmVldtSoyG7yziW3TehQ5h2t%2BiuoNYxJP6L%2FDZem8jrSQUmpXIjjIs%2Badv%2BgHdufRK8UUIHGMspiViBwN9TWhQ8c6xpm0c%2FOQ47O4y0%2FSGSNz6PiCpFlnl0TtIVKONcSgXlOUNzNiAUrGBgnbrBdKgM87BOzEc2jYVoruTsvULC2cg0R%2F%2BSgwkKNgROr%2FtljjIwvn7pGoCjLit1ziQG%2BxHX1RaK6irXuHop66Y%2BO%2BB8dPfzwVVX6A5um%2F3aRhCTKrX55kDJumaxfxB2i2KDLqYSMZ0r3o9uJ66wxcsL64WpEjHz2vQy3YnZXWGYs%2FGFcnJFD0Ih%2F%2FulVQYQcmV5nRiUbGAQYs8J8tKsLIqoxgyyIOshfXgDjXurNAdEGv3VUVlM%2B%2BdflV4pHXTIQaM83CrGfqrHvms1z4V%2Bf9XUZbjk%2Fd27AgEss%2B8JOlWMhRPofiBf%2BnQPrAtNKbb%2F0pll0JvxY1QtEyRTexaGuKkFQ3BClBfONjcekwv9DKyQY6pgHZIYcVcwPP88DmGEIzQ5LjVzSxJ%2BOnGtJpwhEcIOr%2FYsuVTR7FMbsvkqyL5S556n9N%2B7s9pQDJMITdvjmpNplGXlhwIbIqUF0JJ8vzG%2BRtp5sbsT%2FnfqVgvboC1e%2F2aO8DYSFlloIIfakbCSOrb7P4ebJy3CDOUD3wcnheZf9fvu%2F5UK2CP8o7zM%2Bd1z%2BUkSFyiiWgFWXfbnQ7XoAu2Geem8GgIer9&X-Amz-Signature=3c753a14dcbb3594a430ed83b7da1255436355010863f336440571784c93e82e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T3UJT2P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdRYstVMw61%2Bs8xyEhu%2BFDlBZLQBRJWd77%2BMMMeaP15AiBo6XScTugIl8V%2Fd9A8icUguVBWmopuaYjQOZJ2ADSPECr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMjgtCutIRCCxSpw%2FFKtwDuUtuM%2B3MeWHTOjxLGfKnnDp9SArMTQX0TWLA5FWdoR0fUK4e980oEK5eOlWNTMEUXQi2ZSoK7flfkKFbqYSBbE8ET6Qhep%2FwE1PFJPVrescr1pXLANnMyMp93ko%2B6o5e2K8%2BZ7glmVldtSoyG7yziW3TehQ5h2t%2BiuoNYxJP6L%2FDZem8jrSQUmpXIjjIs%2Badv%2BgHdufRK8UUIHGMspiViBwN9TWhQ8c6xpm0c%2FOQ47O4y0%2FSGSNz6PiCpFlnl0TtIVKONcSgXlOUNzNiAUrGBgnbrBdKgM87BOzEc2jYVoruTsvULC2cg0R%2F%2BSgwkKNgROr%2FtljjIwvn7pGoCjLit1ziQG%2BxHX1RaK6irXuHop66Y%2BO%2BB8dPfzwVVX6A5um%2F3aRhCTKrX55kDJumaxfxB2i2KDLqYSMZ0r3o9uJ66wxcsL64WpEjHz2vQy3YnZXWGYs%2FGFcnJFD0Ih%2F%2FulVQYQcmV5nRiUbGAQYs8J8tKsLIqoxgyyIOshfXgDjXurNAdEGv3VUVlM%2B%2BdflV4pHXTIQaM83CrGfqrHvms1z4V%2Bf9XUZbjk%2Fd27AgEss%2B8JOlWMhRPofiBf%2BnQPrAtNKbb%2F0pll0JvxY1QtEyRTexaGuKkFQ3BClBfONjcekwv9DKyQY6pgHZIYcVcwPP88DmGEIzQ5LjVzSxJ%2BOnGtJpwhEcIOr%2FYsuVTR7FMbsvkqyL5S556n9N%2B7s9pQDJMITdvjmpNplGXlhwIbIqUF0JJ8vzG%2BRtp5sbsT%2FnfqVgvboC1e%2F2aO8DYSFlloIIfakbCSOrb7P4ebJy3CDOUD3wcnheZf9fvu%2F5UK2CP8o7zM%2Bd1z%2BUkSFyiiWgFWXfbnQ7XoAu2Geem8GgIer9&X-Amz-Signature=9b1d4fa1553ca6d26a917c9f9a9415b0293aeb9b6e404f17d863d17c0fc63eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

