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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW7WBUZY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrDrSlBh7pMgbJUY8aLJt4yY2uJglVnH38tueISdAknwIgRj%2BLFxmq7X6%2FVcEPwA70OBZjZyBJ5oMrzt%2BlW13P7MEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGAlf3%2FGUtPQ2BQCdSrcA2GVXN4KQJ%2F8BKtUasEuiART2W0hlm3odU6X1o180goRVHCjwFW%2FL5vh3hebiDoNgwbqjENV4aadK0f%2FExzzgX2Fzqaq%2BI7SGSFYTKD5gEggysROCXIXr87JERZ4%2F7jHQIwpKgwSaSR71sEmGm%2FPYyGEg1LRdBWk%2BlSqqnx5jbl2KiK%2BB2claCtkXAhrxt4ymgif8G9joewJAP4hMRn86FyfZuXWyKKBnoqdTH5%2BzjacTf5Gwe6r10A2%2BmUJ95nFwpeQ63533BrACyT3RxRIAebKKUoA6Uet3k2GTnFw%2FACLVz6l7tZk8zjh3unl%2B5nGzpRTzeH0haSLxch3ugddi5N35yRS3NgzLHL%2F9oSwjCodtZ11sGoHrOWBD4lTtnCcJcPIaMjRvWtO7G1%2B%2FEUYZoDplTZJZvSDqoTe0zQOl1B3lzJw1SUy2kDXZWhtyNYkjV3HBfPBgBx7%2FCMfrQqhWF5Pw%2B%2Biz9vg9F7L8FFU0Ieyi42MKyuKaYyKvmwpgT1XEb8wPnweIQ3PjaILbHPkBJifFZt1sGCUdNgBrVaywYMeXfN1pgiwA7jqBcsH5sTGVoUQcBiFot5PuYh0d44XsjuU4rJV%2F%2FqusslLkEIpRHuPGYeAwjezcys1qlfEMP7eh8oGOqUBghsRRR%2Bxx9R6RZbzSlawPIe%2FSc1a7%2F4jmyhNqEq4d1Q3BtmSAc%2Fyu3EuoFC8qPDMxMwCDNWvp7lPDiVQ5GPDS6%2Bg%2F3HhTqlCHsbYYd0DRzRsH%2FdcmlBSxi3LtGszdm5EofshEfl4L0ym9AEcDcGQY8iYJm3bFaoHD3s%2F6HXNMjAAo1L4baRrZ7kKkDuJmGCH%2FortqxvCTzwKhjxtp1Hxoku%2BSI2W&X-Amz-Signature=960f16b6f138da15e4667dd5a0d93bc2237e09fab20a29abd23332c7c96dad42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW7WBUZY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrDrSlBh7pMgbJUY8aLJt4yY2uJglVnH38tueISdAknwIgRj%2BLFxmq7X6%2FVcEPwA70OBZjZyBJ5oMrzt%2BlW13P7MEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGAlf3%2FGUtPQ2BQCdSrcA2GVXN4KQJ%2F8BKtUasEuiART2W0hlm3odU6X1o180goRVHCjwFW%2FL5vh3hebiDoNgwbqjENV4aadK0f%2FExzzgX2Fzqaq%2BI7SGSFYTKD5gEggysROCXIXr87JERZ4%2F7jHQIwpKgwSaSR71sEmGm%2FPYyGEg1LRdBWk%2BlSqqnx5jbl2KiK%2BB2claCtkXAhrxt4ymgif8G9joewJAP4hMRn86FyfZuXWyKKBnoqdTH5%2BzjacTf5Gwe6r10A2%2BmUJ95nFwpeQ63533BrACyT3RxRIAebKKUoA6Uet3k2GTnFw%2FACLVz6l7tZk8zjh3unl%2B5nGzpRTzeH0haSLxch3ugddi5N35yRS3NgzLHL%2F9oSwjCodtZ11sGoHrOWBD4lTtnCcJcPIaMjRvWtO7G1%2B%2FEUYZoDplTZJZvSDqoTe0zQOl1B3lzJw1SUy2kDXZWhtyNYkjV3HBfPBgBx7%2FCMfrQqhWF5Pw%2B%2Biz9vg9F7L8FFU0Ieyi42MKyuKaYyKvmwpgT1XEb8wPnweIQ3PjaILbHPkBJifFZt1sGCUdNgBrVaywYMeXfN1pgiwA7jqBcsH5sTGVoUQcBiFot5PuYh0d44XsjuU4rJV%2F%2FqusslLkEIpRHuPGYeAwjezcys1qlfEMP7eh8oGOqUBghsRRR%2Bxx9R6RZbzSlawPIe%2FSc1a7%2F4jmyhNqEq4d1Q3BtmSAc%2Fyu3EuoFC8qPDMxMwCDNWvp7lPDiVQ5GPDS6%2Bg%2F3HhTqlCHsbYYd0DRzRsH%2FdcmlBSxi3LtGszdm5EofshEfl4L0ym9AEcDcGQY8iYJm3bFaoHD3s%2F6HXNMjAAo1L4baRrZ7kKkDuJmGCH%2FortqxvCTzwKhjxtp1Hxoku%2BSI2W&X-Amz-Signature=732261533b23a427426df121bb9158fd6f24156445246003270fe37e4c795484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

