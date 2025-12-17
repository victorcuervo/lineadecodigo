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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI6ADMON%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQSKbYbYenkGctrCK937%2BPAAjWYEWaAY8JwoaYAk5l6QIgYI66Egh%2B%2B98hPFc3U7g3lOVv9Le5BraoxQT1sboBo0cq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJev2SSSY4RwAAuAuCrcA9S9mxeuA6vJf697l%2BE4wATCFYjBH5J5TZUAOW0fRVJ%2BSQu0sZeRDNjiRpeQzQ1SXcdHgCf48SUCV6Z9u9wgjsJs9ET%2BgbAK910ODg6CCfiFQqJDymcH3qvFgS9vaDNETMxjVFc1uxJbd14SGApDD%2FiykP%2BdE5OxfrRyXDoMcN8BKAxa8cd3lvA3XI%2FUuO1v6V9mPUd1eu1tbiaRCFwH3BHRY0E8fWGFWHatTt02AlQmiFQOzmrf1Loiil4xOqmmkhVMesZqA%2FdJehzE3Sk8Kmovya%2BKA8kSHccrymS0ZgPM45K8KH%2FK%2F0iYtiII%2B8baa1ymi1QLGnUSgz2dRHZN8JqB1FmwGNACRxn%2Fox6NtNSU%2FMRuEOz%2FSj6yCecsDS0GN4TtqyLxb6wbRcL9ofQ7rUh4jlO7Y3gnwL8CaOhCkmMd8qyLPwc%2B9N0N4%2BExnJP%2FaXHqNPiqmfGU6iV%2BVdBq1bvz%2BZG8iUCBS%2BLor%2BCjSKCKSm%2BqsK9XFgAHYu9DSamuFE6GyWw4ATDQCUdY6xthkd0CPUXARVYd%2FXFT86WwdzQkJHA8NwVtZPFfbQ%2FeuWAE%2B%2FXFFpGFM9w5QCuxmTcr%2FCHymu2%2Fd%2BPLW%2FMmK87b51wSNpOA%2BdSjX1p%2Bdap4MOq3icoGOqUBEU0%2BotkJDOqSaiihGKjHwOy8spOmOuK6W3kQAg5XA2gWzeR0U7iDJtKBLkkU1kIJHRYyGtWg3DWceWOk0YVcVk9RRNAVO7ojnPLPC4VL0SygTjPWif3yXf9bALcEta56iDsT%2F92TPZG3IE7NF9IxfGWlfC0zKA99XERq6Si9pEJW2Qr2GkSU9ZIi%2FBdq6t8ttXwyhQbRY7c66N%2FwUPoyp3P9IEN9&X-Amz-Signature=c8bb0931b56b6f27189862d551e7c87ea32d130f3b7c143b85e2a231015ee9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI6ADMON%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQSKbYbYenkGctrCK937%2BPAAjWYEWaAY8JwoaYAk5l6QIgYI66Egh%2B%2B98hPFc3U7g3lOVv9Le5BraoxQT1sboBo0cq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJev2SSSY4RwAAuAuCrcA9S9mxeuA6vJf697l%2BE4wATCFYjBH5J5TZUAOW0fRVJ%2BSQu0sZeRDNjiRpeQzQ1SXcdHgCf48SUCV6Z9u9wgjsJs9ET%2BgbAK910ODg6CCfiFQqJDymcH3qvFgS9vaDNETMxjVFc1uxJbd14SGApDD%2FiykP%2BdE5OxfrRyXDoMcN8BKAxa8cd3lvA3XI%2FUuO1v6V9mPUd1eu1tbiaRCFwH3BHRY0E8fWGFWHatTt02AlQmiFQOzmrf1Loiil4xOqmmkhVMesZqA%2FdJehzE3Sk8Kmovya%2BKA8kSHccrymS0ZgPM45K8KH%2FK%2F0iYtiII%2B8baa1ymi1QLGnUSgz2dRHZN8JqB1FmwGNACRxn%2Fox6NtNSU%2FMRuEOz%2FSj6yCecsDS0GN4TtqyLxb6wbRcL9ofQ7rUh4jlO7Y3gnwL8CaOhCkmMd8qyLPwc%2B9N0N4%2BExnJP%2FaXHqNPiqmfGU6iV%2BVdBq1bvz%2BZG8iUCBS%2BLor%2BCjSKCKSm%2BqsK9XFgAHYu9DSamuFE6GyWw4ATDQCUdY6xthkd0CPUXARVYd%2FXFT86WwdzQkJHA8NwVtZPFfbQ%2FeuWAE%2B%2FXFFpGFM9w5QCuxmTcr%2FCHymu2%2Fd%2BPLW%2FMmK87b51wSNpOA%2BdSjX1p%2Bdap4MOq3icoGOqUBEU0%2BotkJDOqSaiihGKjHwOy8spOmOuK6W3kQAg5XA2gWzeR0U7iDJtKBLkkU1kIJHRYyGtWg3DWceWOk0YVcVk9RRNAVO7ojnPLPC4VL0SygTjPWif3yXf9bALcEta56iDsT%2F92TPZG3IE7NF9IxfGWlfC0zKA99XERq6Si9pEJW2Qr2GkSU9ZIi%2FBdq6t8ttXwyhQbRY7c66N%2FwUPoyp3P9IEN9&X-Amz-Signature=9fb405a7a53449117eadf83adbfe324ca6fc6e6d3dacf812b22f4a252e8badf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

