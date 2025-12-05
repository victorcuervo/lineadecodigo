---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XGGNG46%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX7WnLYrYFTqSz3yAsnuNO1BLtpoKIqKQd6Y%2Bmdh2cPgIgcsTD%2B68kyZ7oPGuta2eVwTGCF9QTDUGKoJdibF1fNQQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDLB8bz0I1qk3M5AvCrcA8DTqXhSNGE5BGhKxAJvzmRLFY14qfzpa086tsHm6l1Pc%2BTYbnbsFOwfELRY7eCml8GGPWTLr%2BhLHq3yRXOUIO4EQwCEgTaj9a0S8RlOE9oqjUs8C6qgBiTnr0EvpjjrfE%2FNc%2BIzgY7elj%2Bzk1t%2ByMWF4hB8siU2jG0PTARx9%2BT0hte4R4LMpGCpBW1yMZ1fBoE1mF1nzFYjLt6oR4ASROGZROW63BDbr1YMbFLhTXIJiwcd4ugMXuHVdftyPlEY1saCa17qrdRXKqEyTTX6TosuJLxrZ%2F6JU6YNJU9cs60J90TMQEIKpvSKsG9pP%2Fw4fYJftK8G4LyupiCPvHBPt%2FjuMyFlVlQEr0bOetrOE5pyMx6ylxJEkNhOq5mAtANGjr9qIOcHldgQDzpVlsEXLGo87vJIQ2jW655NH97Yz3sI7epQ0D6AuHRSRSkP7fmoH0vnkurBm%2BbEM0lBacMgxkjUOgQEXJSaLKT3YS0UOK0knVwALspwV9FP2gR%2BRuEVk8W1YUo1Hy133DPOwP7FJBo2ypGKi2neoX5R0iNm1qF8PYdNvzRvyJTQADAeoIeFWHSEWX8kiShwE6nqAmbjvuPjFQd28YnPxY3EgPIwUDU34oHjBWcSsA37bKeDMPHKy8kGOqUBqq5nyv2VeVfKMkOq8UdcIkegdsW0sd2gOND9U7y08DfIGVwmn6XpERwYXG1v67nnh0Kj7V%2BfokdF08G8UE5n6%2FGIZdtSRMI9tsAzN28UCadkLEHA%2FE31MBbt33K%2F055B1kGx2xSYbUPheBcsxN8jNqBYp1OyJc3gxVaaEsmDYlxSlTroKPcSl0q53KaGGxnd8pkVCFUiUb4J7fPCodFufSy0CxV9&X-Amz-Signature=47cca2b906ddb68479c9d2a786d6f1335045db984332d4b353a480b91b6de765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XGGNG46%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX7WnLYrYFTqSz3yAsnuNO1BLtpoKIqKQd6Y%2Bmdh2cPgIgcsTD%2B68kyZ7oPGuta2eVwTGCF9QTDUGKoJdibF1fNQQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDLB8bz0I1qk3M5AvCrcA8DTqXhSNGE5BGhKxAJvzmRLFY14qfzpa086tsHm6l1Pc%2BTYbnbsFOwfELRY7eCml8GGPWTLr%2BhLHq3yRXOUIO4EQwCEgTaj9a0S8RlOE9oqjUs8C6qgBiTnr0EvpjjrfE%2FNc%2BIzgY7elj%2Bzk1t%2ByMWF4hB8siU2jG0PTARx9%2BT0hte4R4LMpGCpBW1yMZ1fBoE1mF1nzFYjLt6oR4ASROGZROW63BDbr1YMbFLhTXIJiwcd4ugMXuHVdftyPlEY1saCa17qrdRXKqEyTTX6TosuJLxrZ%2F6JU6YNJU9cs60J90TMQEIKpvSKsG9pP%2Fw4fYJftK8G4LyupiCPvHBPt%2FjuMyFlVlQEr0bOetrOE5pyMx6ylxJEkNhOq5mAtANGjr9qIOcHldgQDzpVlsEXLGo87vJIQ2jW655NH97Yz3sI7epQ0D6AuHRSRSkP7fmoH0vnkurBm%2BbEM0lBacMgxkjUOgQEXJSaLKT3YS0UOK0knVwALspwV9FP2gR%2BRuEVk8W1YUo1Hy133DPOwP7FJBo2ypGKi2neoX5R0iNm1qF8PYdNvzRvyJTQADAeoIeFWHSEWX8kiShwE6nqAmbjvuPjFQd28YnPxY3EgPIwUDU34oHjBWcSsA37bKeDMPHKy8kGOqUBqq5nyv2VeVfKMkOq8UdcIkegdsW0sd2gOND9U7y08DfIGVwmn6XpERwYXG1v67nnh0Kj7V%2BfokdF08G8UE5n6%2FGIZdtSRMI9tsAzN28UCadkLEHA%2FE31MBbt33K%2F055B1kGx2xSYbUPheBcsxN8jNqBYp1OyJc3gxVaaEsmDYlxSlTroKPcSl0q53KaGGxnd8pkVCFUiUb4J7fPCodFufSy0CxV9&X-Amz-Signature=ad69c7afb04198853123708539b38f301d5fec7363038c61b194fe3e0a0959f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

