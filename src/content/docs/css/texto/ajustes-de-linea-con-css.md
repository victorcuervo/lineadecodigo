---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWASJ7JM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4zpQlzOIMmPfcFr%2BjXazN%2B4sZ3uF8EpEmHLCss4wnowIhANkulPEjyRwEggiYa8v%2BdvqQFgag6gEV0aX5M6OXAcTUKv8DCH8QABoMNjM3NDIzMTgzODA1IgxDsZpYtU07QUbTtwsq3AMy7dkW%2Bfa8sRc7GcqzIksDfX1LWETtVNd%2FBRD8yaLKhA1hwV2N3faR1Frj%2BlKMBMfB59MDpDFlvoTt116mlf7PWEJsjSztKN%2FRvm%2B1%2BGNN6t8ghi6unKuR48YQzBIrOhTjZUoVf3JFnUkcNqFGdrEXGPYi3yuz2Dx57VrcKWMv2kRPn0Kl8aj9GbJ3najr8X3NR9FRd0aNGChVMuuOY2vVCVK9JscrLdJ4mafy9dWsJDq3WgAaI27idJydFkLRjsL%2BuUi9esRLoVdZl0pJf%2FODC1RG8gnTVTNPTZb1SFKyhuo3B7zWHoEa6qC6%2FTKHltp8GPT%2BToIIsEMZyIHovbDAiF6OilnDWSD514Q7locdJRBJ1JK2PMFZTeEYdcgLA0NhkFkZg4UcLMhDMUBSuqc5o9eCumHj7pVce%2Ba9Lwqb%2BrazxJRMRHunjhKlVIqSwnHQz8bNjMXmn1kJ1vyvFXjZK5a0BAdCDIMg5aLZF6XgqtVFw7F5uqHxIHfSJXga24ThC5MBCMhgCsAci8MSe6GCtzNUpkujDMx1ceRG7OVjha9zkj2344HxSRCEBbDzYer34iXK8nuz27dcxQvTTO49gWKOkXPHqgUJOUp22n3q9khTGWnYrQcTEXcbMTCY44rKBjqkAeI794SRrHeXMhP%2F0XMy85tPMKgK885a3SYDtaXPwJQ0keg548hccClimjlXkEmr%2FBWhoHmH%2FWCjexkA%2BT57PDxnORqUZUsSCQPOrbBsqvu873e7Ks3j%2Br%2BHZQR9DFkKiWSq5pzsLcNr8wJSoExqcR82Qalmkw9Gb%2Bhb7YmeTgSl6IXvTcmvz8vYrvnlWtu9exR6F%2F0TiKYsObWJjdyrSQVy8kAe&X-Amz-Signature=76812bc195aaf51100b7fbea74bafb4f6bc54937266fc36f0a918b3a9882e4c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWASJ7JM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4zpQlzOIMmPfcFr%2BjXazN%2B4sZ3uF8EpEmHLCss4wnowIhANkulPEjyRwEggiYa8v%2BdvqQFgag6gEV0aX5M6OXAcTUKv8DCH8QABoMNjM3NDIzMTgzODA1IgxDsZpYtU07QUbTtwsq3AMy7dkW%2Bfa8sRc7GcqzIksDfX1LWETtVNd%2FBRD8yaLKhA1hwV2N3faR1Frj%2BlKMBMfB59MDpDFlvoTt116mlf7PWEJsjSztKN%2FRvm%2B1%2BGNN6t8ghi6unKuR48YQzBIrOhTjZUoVf3JFnUkcNqFGdrEXGPYi3yuz2Dx57VrcKWMv2kRPn0Kl8aj9GbJ3najr8X3NR9FRd0aNGChVMuuOY2vVCVK9JscrLdJ4mafy9dWsJDq3WgAaI27idJydFkLRjsL%2BuUi9esRLoVdZl0pJf%2FODC1RG8gnTVTNPTZb1SFKyhuo3B7zWHoEa6qC6%2FTKHltp8GPT%2BToIIsEMZyIHovbDAiF6OilnDWSD514Q7locdJRBJ1JK2PMFZTeEYdcgLA0NhkFkZg4UcLMhDMUBSuqc5o9eCumHj7pVce%2Ba9Lwqb%2BrazxJRMRHunjhKlVIqSwnHQz8bNjMXmn1kJ1vyvFXjZK5a0BAdCDIMg5aLZF6XgqtVFw7F5uqHxIHfSJXga24ThC5MBCMhgCsAci8MSe6GCtzNUpkujDMx1ceRG7OVjha9zkj2344HxSRCEBbDzYer34iXK8nuz27dcxQvTTO49gWKOkXPHqgUJOUp22n3q9khTGWnYrQcTEXcbMTCY44rKBjqkAeI794SRrHeXMhP%2F0XMy85tPMKgK885a3SYDtaXPwJQ0keg548hccClimjlXkEmr%2FBWhoHmH%2FWCjexkA%2BT57PDxnORqUZUsSCQPOrbBsqvu873e7Ks3j%2Br%2BHZQR9DFkKiWSq5pzsLcNr8wJSoExqcR82Qalmkw9Gb%2Bhb7YmeTgSl6IXvTcmvz8vYrvnlWtu9exR6F%2F0TiKYsObWJjdyrSQVy8kAe&X-Amz-Signature=a09e1186b7dab1f011fd958ebcfe440e0284d888b2e25079dbc99b3bbb176c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

