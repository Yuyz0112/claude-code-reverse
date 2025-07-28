
// @from(Start 4657814, End 4679056)
KY2 = Y((cF3, JY2) => {
  function J29(I) {
    let d = I.COMMENT("--", "$"),
      G = "[a-zA-Z_][a-zA-Z_0-9$]*",
      Z = "\\$([a-zA-Z_]?|[a-zA-Z_][a-zA-Z_0-9]*)\\$",
      C = "<<\\s*[a-zA-Z_][a-zA-Z_0-9$]*\\s*>>",
      W = "ABORT ALTER ANALYZE BEGIN CALL CHECKPOINT|10 CLOSE CLUSTER COMMENT COMMIT COPY CREATE DEALLOCATE DECLARE DELETE DISCARD DO DROP END EXECUTE EXPLAIN FETCH GRANT IMPORT INSERT LISTEN LOAD LOCK MOVE NOTIFY PREPARE REASSIGN|10 REFRESH REINDEX RELEASE RESET REVOKE ROLLBACK SAVEPOINT SECURITY SELECT SET SHOW START TRUNCATE UNLISTEN|10 UPDATE VACUUM|10 VALUES AGGREGATE COLLATION CONVERSION|10 DATABASE DEFAULT PRIVILEGES DOMAIN TRIGGER EXTENSION FOREIGN WRAPPER|10 TABLE FUNCTION GROUP LANGUAGE LARGE OBJECT MATERIALIZED VIEW OPERATOR CLASS FAMILY POLICY PUBLICATION|10 ROLE RULE SCHEMA SEQUENCE SERVER STATISTICS SUBSCRIPTION SYSTEM TABLESPACE CONFIGURATION DICTIONARY PARSER TEMPLATE TYPE USER MAPPING PREPARED ACCESS METHOD CAST AS TRANSFORM TRANSACTION OWNED TO INTO SESSION AUTHORIZATION INDEX PROCEDURE ASSERTION ALL ANALYSE AND ANY ARRAY ASC ASYMMETRIC|10 BOTH CASE CHECK COLLATE COLUMN CONCURRENTLY|10 CONSTRAINT CROSS DEFERRABLE RANGE DESC DISTINCT ELSE EXCEPT FOR FREEZE|10 FROM FULL HAVING ILIKE IN INITIALLY INNER INTERSECT IS ISNULL JOIN LATERAL LEADING LIKE LIMIT NATURAL NOT NOTNULL NULL OFFSET ON ONLY OR ORDER OUTER OVERLAPS PLACING PRIMARY REFERENCES RETURNING SIMILAR SOME SYMMETRIC TABLESAMPLE THEN TRAILING UNION UNIQUE USING VARIADIC|10 VERBOSE WHEN WHERE WINDOW WITH BY RETURNS INOUT OUT SETOF|10 IF STRICT CURRENT CONTINUE OWNER LOCATION OVER PARTITION WITHIN BETWEEN ESCAPE EXTERNAL INVOKER DEFINER WORK RENAME VERSION CONNECTION CONNECT TABLES TEMP TEMPORARY FUNCTIONS SEQUENCES TYPES SCHEMAS OPTION CASCADE RESTRICT ADD ADMIN EXISTS VALID VALIDATE ENABLE DISABLE REPLICA|10 ALWAYS PASSING COLUMNS PATH REF VALUE OVERRIDING IMMUTABLE STABLE VOLATILE BEFORE AFTER EACH ROW PROCEDURAL ROUTINE NO HANDLER VALIDATOR OPTIONS STORAGE OIDS|10 WITHOUT INHERIT DEPENDS CALLED INPUT LEAKPROOF|10 COST ROWS NOWAIT SEARCH UNTIL ENCRYPTED|10 PASSWORD CONFLICT|10 INSTEAD INHERITS CHARACTERISTICS WRITE CURSOR ALSO STATEMENT SHARE EXCLUSIVE INLINE ISOLATION REPEATABLE READ COMMITTED SERIALIZABLE UNCOMMITTED LOCAL GLOBAL SQL PROCEDURES RECURSIVE SNAPSHOT ROLLUP CUBE TRUSTED|10 INCLUDE FOLLOWING PRECEDING UNBOUNDED RANGE GROUPS UNENCRYPTED|10 SYSID FORMAT DELIMITER HEADER QUOTE ENCODING FILTER OFF FORCE_QUOTE FORCE_NOT_NULL FORCE_NULL COSTS BUFFERS TIMING SUMMARY DISABLE_PAGE_SKIPPING RESTART CYCLE GENERATED IDENTITY DEFERRED IMMEDIATE LEVEL LOGGED UNLOGGED OF NOTHING NONE EXCLUDE ATTRIBUTE USAGE ROUTINES TRUE FALSE NAN INFINITY ",
      w = "SUPERUSER NOSUPERUSER CREATEDB NOCREATEDB CREATEROLE NOCREATEROLE INHERIT NOINHERIT LOGIN NOLOGIN REPLICATION NOREPLICATION BYPASSRLS NOBYPASSRLS ",
      B = "ALIAS BEGIN CONSTANT DECLARE END EXCEPTION RETURN PERFORM|10 RAISE GET DIAGNOSTICS STACKED|10 FOREACH LOOP ELSIF EXIT WHILE REVERSE SLICE DEBUG LOG INFO NOTICE WARNING ASSERT OPEN ",
      A = "BIGINT INT8 BIGSERIAL SERIAL8 BIT VARYING VARBIT BOOLEAN BOOL BOX BYTEA CHARACTER CHAR VARCHAR CIDR CIRCLE DATE DOUBLE PRECISION FLOAT8 FLOAT INET INTEGER INT INT4 INTERVAL JSON JSONB LINE LSEG|10 MACADDR MACADDR8 MONEY NUMERIC DEC DECIMAL PATH POINT POLYGON REAL FLOAT4 SMALLINT INT2 SMALLSERIAL|10 SERIAL2|10 SERIAL|10 SERIAL4|10 TEXT TIME ZONE TIMETZ|10 TIMESTAMP TIMESTAMPTZ|10 TSQUERY|10 TSVECTOR|10 TXID_SNAPSHOT|10 UUID XML NATIONAL NCHAR INT4RANGE|10 INT8RANGE|10 NUMRANGE|10 TSRANGE|10 TSTZRANGE|10 DATERANGE|10 ANYELEMENT ANYARRAY ANYNONARRAY ANYENUM ANYRANGE CSTRING INTERNAL RECORD PG_DDL_COMMAND VOID UNKNOWN OPAQUE REFCURSOR NAME OID REGPROC|10 REGPROCEDURE|10 REGOPER|10 REGOPERATOR|10 REGCLASS|10 REGTYPE|10 REGROLE|10 REGNAMESPACE|10 REGCONFIG|10 REGDICTIONARY|10 ",
      V = A.trim().split(" ").map(function(K) {
        return K.split("|")[0]
      }).join("|"),
      X = "CURRENT_TIME CURRENT_TIMESTAMP CURRENT_USER CURRENT_CATALOG|10 CURRENT_DATE LOCALTIME LOCALTIMESTAMP CURRENT_ROLE|10 CURRENT_SCHEMA|10 SESSION_USER PUBLIC ",
      _ = "FOUND NEW OLD TG_NAME|10 TG_WHEN|10 TG_LEVEL|10 TG_OP|10 TG_RELID|10 TG_RELNAME|10 TG_TABLE_NAME|10 TG_TABLE_SCHEMA|10 TG_NARGS|10 TG_ARGV|10 TG_EVENT|10 TG_TAG|10 ROW_COUNT RESULT_OID|10 PG_CONTEXT|10 RETURNED_SQLSTATE COLUMN_NAME CONSTRAINT_NAME PG_DATATYPE_NAME|10 MESSAGE_TEXT TABLE_NAME SCHEMA_NAME PG_EXCEPTION_DETAIL|10 PG_EXCEPTION_HINT|10 PG_EXCEPTION_CONTEXT|10 ",
      F = "SQLSTATE SQLERRM|10 SUCCESSFUL_COMPLETION WARNING DYNAMIC_RESULT_SETS_RETURNED IMPLICIT_ZERO_BIT_PADDING NULL_VALUE_ELIMINATED_IN_SET_FUNCTION PRIVILEGE_NOT_GRANTED PRIVILEGE_NOT_REVOKED STRING_DATA_RIGHT_TRUNCATION DEPRECATED_FEATURE NO_DATA NO_ADDITIONAL_DYNAMIC_RESULT_SETS_RETURNED SQL_STATEMENT_NOT_YET_COMPLETE CONNECTION_EXCEPTION CONNECTION_DOES_NOT_EXIST CONNECTION_FAILURE SQLCLIENT_UNABLE_TO_ESTABLISH_SQLCONNECTION SQLSERVER_REJECTED_ESTABLISHMENT_OF_SQLCONNECTION TRANSACTION_RESOLUTION_UNKNOWN PROTOCOL_VIOLATION TRIGGERED_ACTION_EXCEPTION FEATURE_NOT_SUPPORTED INVALID_TRANSACTION_INITIATION LOCATOR_EXCEPTION INVALID_LOCATOR_SPECIFICATION INVALID_GRANTOR INVALID_GRANT_OPERATION INVALID_ROLE_SPECIFICATION DIAGNOSTICS_EXCEPTION STACKED_DIAGNOSTICS_ACCESSED_WITHOUT_ACTIVE_HANDLER CASE_NOT_FOUND CARDINALITY_VIOLATION DATA_EXCEPTION ARRAY_SUBSCRIPT_ERROR CHARACTER_NOT_IN_REPERTOIRE DATETIME_FIELD_OVERFLOW DIVISION_BY_ZERO ERROR_IN_ASSIGNMENT ESCAPE_CHARACTER_CONFLICT INDICATOR_OVERFLOW INTERVAL_FIELD_OVERFLOW INVALID_ARGUMENT_FOR_LOGARITHM INVALID_ARGUMENT_FOR_NTILE_FUNCTION INVALID_ARGUMENT_FOR_NTH_VALUE_FUNCTION INVALID_ARGUMENT_FOR_POWER_FUNCTION INVALID_ARGUMENT_FOR_WIDTH_BUCKET_FUNCTION INVALID_CHARACTER_VALUE_FOR_CAST INVALID_DATETIME_FORMAT INVALID_ESCAPE_CHARACTER INVALID_ESCAPE_OCTET INVALID_ESCAPE_SEQUENCE NONSTANDARD_USE_OF_ESCAPE_CHARACTER INVALID_INDICATOR_PARAMETER_VALUE INVALID_PARAMETER_VALUE INVALID_REGULAR_EXPRESSION INVALID_ROW_COUNT_IN_LIMIT_CLAUSE INVALID_ROW_COUNT_IN_RESULT_OFFSET_CLAUSE INVALID_TABLESAMPLE_ARGUMENT INVALID_TABLESAMPLE_REPEAT INVALID_TIME_ZONE_DISPLACEMENT_VALUE INVALID_USE_OF_ESCAPE_CHARACTER MOST_SPECIFIC_TYPE_MISMATCH NULL_VALUE_NOT_ALLOWED NULL_VALUE_NO_INDICATOR_PARAMETER NUMERIC_VALUE_OUT_OF_RANGE SEQUENCE_GENERATOR_LIMIT_EXCEEDED STRING_DATA_LENGTH_MISMATCH STRING_DATA_RIGHT_TRUNCATION SUBSTRING_ERROR TRIM_ERROR UNTERMINATED_C_STRING ZERO_LENGTH_CHARACTER_STRING FLOATING_POINT_EXCEPTION INVALID_TEXT_REPRESENTATION INVALID_BINARY_REPRESENTATION BAD_COPY_FILE_FORMAT UNTRANSLATABLE_CHARACTER NOT_AN_XML_DOCUMENT INVALID_XML_DOCUMENT INVALID_XML_CONTENT INVALID_XML_COMMENT INVALID_XML_PROCESSING_INSTRUCTION INTEGRITY_CONSTRAINT_VIOLATION RESTRICT_VIOLATION NOT_NULL_VIOLATION FOREIGN_KEY_VIOLATION UNIQUE_VIOLATION CHECK_VIOLATION EXCLUSION_VIOLATION INVALID_CURSOR_STATE INVALID_TRANSACTION_STATE ACTIVE_SQL_TRANSACTION BRANCH_TRANSACTION_ALREADY_ACTIVE HELD_CURSOR_REQUIRES_SAME_ISOLATION_LEVEL INAPPROPRIATE_ACCESS_MODE_FOR_BRANCH_TRANSACTION INAPPROPRIATE_ISOLATION_LEVEL_FOR_BRANCH_TRANSACTION NO_ACTIVE_SQL_TRANSACTION_FOR_BRANCH_TRANSACTION READ_ONLY_SQL_TRANSACTION SCHEMA_AND_DATA_STATEMENT_MIXING_NOT_SUPPORTED NO_ACTIVE_SQL_TRANSACTION IN_FAILED_SQL_TRANSACTION IDLE_IN_TRANSACTION_SESSION_TIMEOUT INVALID_SQL_STATEMENT_NAME TRIGGERED_DATA_CHANGE_VIOLATION INVALID_AUTHORIZATION_SPECIFICATION INVALID_PASSWORD DEPENDENT_PRIVILEGE_DESCRIPTORS_STILL_EXIST DEPENDENT_OBJECTS_STILL_EXIST INVALID_TRANSACTION_TERMINATION SQL_ROUTINE_EXCEPTION FUNCTION_EXECUTED_NO_RETURN_STATEMENT MODIFYING_SQL_DATA_NOT_PERMITTED PROHIBITED_SQL_STATEMENT_ATTEMPTED READING_SQL_DATA_NOT_PERMITTED INVALID_CURSOR_NAME EXTERNAL_ROUTINE_EXCEPTION CONTAINING_SQL_NOT_PERMITTED MODIFYING_SQL_DATA_NOT_PERMITTED PROHIBITED_SQL_STATEMENT_ATTEMPTED READING_SQL_DATA_NOT_PERMITTED EXTERNAL_ROUTINE_INVOCATION_EXCEPTION INVALID_SQLSTATE_RETURNED NULL_VALUE_NOT_ALLOWED TRIGGER_PROTOCOL_VIOLATED SRF_PROTOCOL_VIOLATED EVENT_TRIGGER_PROTOCOL_VIOLATED SAVEPOINT_EXCEPTION INVALID_SAVEPOINT_SPECIFICATION INVALID_CATALOG_NAME INVALID_SCHEMA_NAME TRANSACTION_ROLLBACK TRANSACTION_INTEGRITY_CONSTRAINT_VIOLATION SERIALIZATION_FAILURE STATEMENT_COMPLETION_UNKNOWN DEADLOCK_DETECTED SYNTAX_ERROR_OR_ACCESS_RULE_VIOLATION SYNTAX_ERROR INSUFFICIENT_PRIVILEGE CANNOT_COERCE GROUPING_ERROR WINDOWING_ERROR INVALID_RECURSION INVALID_FOREIGN_KEY INVALID_NAME NAME_TOO_LONG RESERVED_NAME DATATYPE_MISMATCH INDETERMINATE_DATATYPE COLLATION_MISMATCH INDETERMINATE_COLLATION WRONG_OBJECT_TYPE GENERATED_ALWAYS UNDEFINED_COLUMN UNDEFINED_FUNCTION UNDEFINED_TABLE UNDEFINED_PARAMETER UNDEFINED_OBJECT DUPLICATE_COLUMN DUPLICATE_CURSOR DUPLICATE_DATABASE DUPLICATE_FUNCTION DUPLICATE_PREPARED_STATEMENT DUPLICATE_SCHEMA DUPLICATE_TABLE DUPLICATE_ALIAS DUPLICATE_OBJECT AMBIGUOUS_COLUMN AMBIGUOUS_FUNCTION AMBIGUOUS_PARAMETER AMBIGUOUS_ALIAS INVALID_COLUMN_REFERENCE INVALID_COLUMN_DEFINITION INVALID_CURSOR_DEFINITION INVALID_DATABASE_DEFINITION INVALID_FUNCTION_DEFINITION INVALID_PREPARED_STATEMENT_DEFINITION INVALID_SCHEMA_DEFINITION INVALID_TABLE_DEFINITION INVALID_OBJECT_DEFINITION WITH_CHECK_OPTION_VIOLATION INSUFFICIENT_RESOURCES DISK_FULL OUT_OF_MEMORY TOO_MANY_CONNECTIONS CONFIGURATION_LIMIT_EXCEEDED PROGRAM_LIMIT_EXCEEDED STATEMENT_TOO_COMPLEX TOO_MANY_COLUMNS TOO_MANY_ARGUMENTS OBJECT_NOT_IN_PREREQUISITE_STATE OBJECT_IN_USE CANT_CHANGE_RUNTIME_PARAM LOCK_NOT_AVAILABLE OPERATOR_INTERVENTION QUERY_CANCELED ADMIN_SHUTDOWN CRASH_SHUTDOWN CANNOT_CONNECT_NOW DATABASE_DROPPED SYSTEM_ERROR IO_ERROR UNDEFINED_FILE DUPLICATE_FILE SNAPSHOT_TOO_OLD CONFIG_FILE_ERROR LOCK_FILE_EXISTS FDW_ERROR FDW_COLUMN_NAME_NOT_FOUND FDW_DYNAMIC_PARAMETER_VALUE_NEEDED FDW_FUNCTION_SEQUENCE_ERROR FDW_INCONSISTENT_DESCRIPTOR_INFORMATION FDW_INVALID_ATTRIBUTE_VALUE FDW_INVALID_COLUMN_NAME FDW_INVALID_COLUMN_NUMBER FDW_INVALID_DATA_TYPE FDW_INVALID_DATA_TYPE_DESCRIPTORS FDW_INVALID_DESCRIPTOR_FIELD_IDENTIFIER FDW_INVALID_HANDLE FDW_INVALID_OPTION_INDEX FDW_INVALID_OPTION_NAME FDW_INVALID_STRING_LENGTH_OR_BUFFER_LENGTH FDW_INVALID_STRING_FORMAT FDW_INVALID_USE_OF_NULL_POINTER FDW_TOO_MANY_HANDLES FDW_OUT_OF_MEMORY FDW_NO_SCHEMAS FDW_OPTION_NAME_NOT_FOUND FDW_REPLY_HANDLE FDW_SCHEMA_NOT_FOUND FDW_TABLE_NOT_FOUND FDW_UNABLE_TO_CREATE_EXECUTION FDW_UNABLE_TO_CREATE_REPLY FDW_UNABLE_TO_ESTABLISH_CONNECTION PLPGSQL_ERROR RAISE_EXCEPTION NO_DATA_FOUND TOO_MANY_ROWS ASSERT_FAILURE INTERNAL_ERROR DATA_CORRUPTED INDEX_CORRUPTED ",
      J = "ARRAY_AGG AVG BIT_AND BIT_OR BOOL_AND BOOL_OR COUNT EVERY JSON_AGG JSONB_AGG JSON_OBJECT_AGG JSONB_OBJECT_AGG MAX MIN MODE STRING_AGG SUM XMLAGG CORR COVAR_POP COVAR_SAMP REGR_AVGX REGR_AVGY REGR_COUNT REGR_INTERCEPT REGR_R2 REGR_SLOPE REGR_SXX REGR_SXY REGR_SYY STDDEV STDDEV_POP STDDEV_SAMP VARIANCE VAR_POP VAR_SAMP PERCENTILE_CONT PERCENTILE_DISC ROW_NUMBER RANK DENSE_RANK PERCENT_RANK CUME_DIST NTILE LAG LEAD FIRST_VALUE LAST_VALUE NTH_VALUE NUM_NONNULLS NUM_NULLS ABS CBRT CEIL CEILING DEGREES DIV EXP FLOOR LN LOG MOD PI POWER RADIANS ROUND SCALE SIGN SQRT TRUNC WIDTH_BUCKET RANDOM SETSEED ACOS ACOSD ASIN ASIND ATAN ATAND ATAN2 ATAN2D COS COSD COT COTD SIN SIND TAN TAND BIT_LENGTH CHAR_LENGTH CHARACTER_LENGTH LOWER OCTET_LENGTH OVERLAY POSITION SUBSTRING TREAT TRIM UPPER ASCII BTRIM CHR CONCAT CONCAT_WS CONVERT CONVERT_FROM CONVERT_TO DECODE ENCODE INITCAP LEFT LENGTH LPAD LTRIM MD5 PARSE_IDENT PG_CLIENT_ENCODING QUOTE_IDENT|10 QUOTE_LITERAL|10 QUOTE_NULLABLE|10 REGEXP_MATCH REGEXP_MATCHES REGEXP_REPLACE REGEXP_SPLIT_TO_ARRAY REGEXP_SPLIT_TO_TABLE REPEAT REPLACE REVERSE RIGHT RPAD RTRIM SPLIT_PART STRPOS SUBSTR TO_ASCII TO_HEX TRANSLATE OCTET_LENGTH GET_BIT GET_BYTE SET_BIT SET_BYTE TO_CHAR TO_DATE TO_NUMBER TO_TIMESTAMP AGE CLOCK_TIMESTAMP|10 DATE_PART DATE_TRUNC ISFINITE JUSTIFY_DAYS JUSTIFY_HOURS JUSTIFY_INTERVAL MAKE_DATE MAKE_INTERVAL|10 MAKE_TIME MAKE_TIMESTAMP|10 MAKE_TIMESTAMPTZ|10 NOW STATEMENT_TIMESTAMP|10 TIMEOFDAY TRANSACTION_TIMESTAMP|10 ENUM_FIRST ENUM_LAST ENUM_RANGE AREA CENTER DIAMETER HEIGHT ISCLOSED ISOPEN NPOINTS PCLOSE POPEN RADIUS WIDTH BOX BOUND_BOX CIRCLE LINE LSEG PATH POLYGON ABBREV BROADCAST HOST HOSTMASK MASKLEN NETMASK NETWORK SET_MASKLEN TEXT INET_SAME_FAMILY INET_MERGE MACADDR8_SET7BIT ARRAY_TO_TSVECTOR GET_CURRENT_TS_CONFIG NUMNODE PLAINTO_TSQUERY PHRASETO_TSQUERY WEBSEARCH_TO_TSQUERY QUERYTREE SETWEIGHT STRIP TO_TSQUERY TO_TSVECTOR JSON_TO_TSVECTOR JSONB_TO_TSVECTOR TS_DELETE TS_FILTER TS_HEADLINE TS_RANK TS_RANK_CD TS_REWRITE TSQUERY_PHRASE TSVECTOR_TO_ARRAY TSVECTOR_UPDATE_TRIGGER TSVECTOR_UPDATE_TRIGGER_COLUMN XMLCOMMENT XMLCONCAT XMLELEMENT XMLFOREST XMLPI XMLROOT XMLEXISTS XML_IS_WELL_FORMED XML_IS_WELL_FORMED_DOCUMENT XML_IS_WELL_FORMED_CONTENT XPATH XPATH_EXISTS XMLTABLE XMLNAMESPACES TABLE_TO_XML TABLE_TO_XMLSCHEMA TABLE_TO_XML_AND_XMLSCHEMA QUERY_TO_XML QUERY_TO_XMLSCHEMA QUERY_TO_XML_AND_XMLSCHEMA CURSOR_TO_XML CURSOR_TO_XMLSCHEMA SCHEMA_TO_XML SCHEMA_TO_XMLSCHEMA SCHEMA_TO_XML_AND_XMLSCHEMA DATABASE_TO_XML DATABASE_TO_XMLSCHEMA DATABASE_TO_XML_AND_XMLSCHEMA XMLATTRIBUTES TO_JSON TO_JSONB ARRAY_TO_JSON ROW_TO_JSON JSON_BUILD_ARRAY JSONB_BUILD_ARRAY JSON_BUILD_OBJECT JSONB_BUILD_OBJECT JSON_OBJECT JSONB_OBJECT JSON_ARRAY_LENGTH JSONB_ARRAY_LENGTH JSON_EACH JSONB_EACH JSON_EACH_TEXT JSONB_EACH_TEXT JSON_EXTRACT_PATH JSONB_EXTRACT_PATH JSON_OBJECT_KEYS JSONB_OBJECT_KEYS JSON_POPULATE_RECORD JSONB_POPULATE_RECORD JSON_POPULATE_RECORDSET JSONB_POPULATE_RECORDSET JSON_ARRAY_ELEMENTS JSONB_ARRAY_ELEMENTS JSON_ARRAY_ELEMENTS_TEXT JSONB_ARRAY_ELEMENTS_TEXT JSON_TYPEOF JSONB_TYPEOF JSON_TO_RECORD JSONB_TO_RECORD JSON_TO_RECORDSET JSONB_TO_RECORDSET JSON_STRIP_NULLS JSONB_STRIP_NULLS JSONB_SET JSONB_INSERT JSONB_PRETTY CURRVAL LASTVAL NEXTVAL SETVAL COALESCE NULLIF GREATEST LEAST ARRAY_APPEND ARRAY_CAT ARRAY_NDIMS ARRAY_DIMS ARRAY_FILL ARRAY_LENGTH ARRAY_LOWER ARRAY_POSITION ARRAY_POSITIONS ARRAY_PREPEND ARRAY_REMOVE ARRAY_REPLACE ARRAY_TO_STRING ARRAY_UPPER CARDINALITY STRING_TO_ARRAY UNNEST ISEMPTY LOWER_INC UPPER_INC LOWER_INF UPPER_INF RANGE_MERGE GENERATE_SERIES GENERATE_SUBSCRIPTS CURRENT_DATABASE CURRENT_QUERY CURRENT_SCHEMA|10 CURRENT_SCHEMAS|10 INET_CLIENT_ADDR INET_CLIENT_PORT INET_SERVER_ADDR INET_SERVER_PORT ROW_SECURITY_ACTIVE FORMAT_TYPE TO_REGCLASS TO_REGPROC TO_REGPROCEDURE TO_REGOPER TO_REGOPERATOR TO_REGTYPE TO_REGNAMESPACE TO_REGROLE COL_DESCRIPTION OBJ_DESCRIPTION SHOBJ_DESCRIPTION TXID_CURRENT TXID_CURRENT_IF_ASSIGNED TXID_CURRENT_SNAPSHOT TXID_SNAPSHOT_XIP TXID_SNAPSHOT_XMAX TXID_SNAPSHOT_XMIN TXID_VISIBLE_IN_SNAPSHOT TXID_STATUS CURRENT_SETTING SET_CONFIG BRIN_SUMMARIZE_NEW_VALUES BRIN_SUMMARIZE_RANGE BRIN_DESUMMARIZE_RANGE GIN_CLEAN_PENDING_LIST SUPPRESS_REDUNDANT_UPDATES_TRIGGER LO_FROM_BYTEA LO_PUT LO_GET LO_CREAT LO_CREATE LO_UNLINK LO_IMPORT LO_EXPORT LOREAD LOWRITE GROUPING CAST ".trim().split(" ").map(function(K) {
        return K.split("|")[0]
      }).join("|");
    return {
      name: "PostgreSQL",
      aliases: ["postgres", "postgresql"],
      case_insensitive: !0,
      keywords: {
        keyword: W + B + w,
        built_in: X + _ + F
      },
      illegal: /:==|\W\s*\(\*|(^|\s)\$[a-z]|\{\{|[a-z]:\s*$|\.\.\.|TO:|DO:/,
      contains: [{
        className: "keyword",
        variants: [{
          begin: /\bTEXT\s*SEARCH\b/
        }, {
          begin: /\b(PRIMARY|FOREIGN|FOR(\s+NO)?)\s+KEY\b/
        }, {
          begin: /\bPARALLEL\s+(UNSAFE|RESTRICTED|SAFE)\b/
        }, {
          begin: /\bSTORAGE\s+(PLAIN|EXTERNAL|EXTENDED|MAIN)\b/
        }, {
          begin: /\bMATCH\s+(FULL|PARTIAL|SIMPLE)\b/
        }, {
          begin: /\bNULLS\s+(FIRST|LAST)\b/
        }, {
          begin: /\bEVENT\s+TRIGGER\b/
        }, {
          begin: /\b(MAPPING|OR)\s+REPLACE\b/
        }, {
          begin: /\b(FROM|TO)\s+(PROGRAM|STDIN|STDOUT)\b/
        }, {
          begin: /\b(SHARE|EXCLUSIVE)\s+MODE\b/
        }, {
          begin: /\b(LEFT|RIGHT)\s+(OUTER\s+)?JOIN\b/
        }, {
          begin: /\b(FETCH|MOVE)\s+(NEXT|PRIOR|FIRST|LAST|ABSOLUTE|RELATIVE|FORWARD|BACKWARD)\b/
        }, {
          begin: /\bPRESERVE\s+ROWS\b/
        }, {
          begin: /\bDISCARD\s+PLANS\b/
        }, {
          begin: /\bREFERENCING\s+(OLD|NEW)\b/
        }, {
          begin: /\bSKIP\s+LOCKED\b/
        }, {
          begin: /\bGROUPING\s+SETS\b/
        }, {
          begin: /\b(BINARY|INSENSITIVE|SCROLL|NO\s+SCROLL)\s+(CURSOR|FOR)\b/
        }, {
          begin: /\b(WITH|WITHOUT)\s+HOLD\b/
        }, {
          begin: /\bWITH\s+(CASCADED|LOCAL)\s+CHECK\s+OPTION\b/
        }, {
          begin: /\bEXCLUDE\s+(TIES|NO\s+OTHERS)\b/
        }, {
          begin: /\bFORMAT\s+(TEXT|XML|JSON|YAML)\b/
        }, {
          begin: /\bSET\s+((SESSION|LOCAL)\s+)?NAMES\b/
        }, {
          begin: /\bIS\s+(NOT\s+)?UNKNOWN\b/
        }, {
          begin: /\bSECURITY\s+LABEL\b/
        }, {
          begin: /\bSTANDALONE\s+(YES|NO|NO\s+VALUE)\b/
        }, {
          begin: /\bWITH\s+(NO\s+)?DATA\b/
        }, {
          begin: /\b(FOREIGN|SET)\s+DATA\b/
        }, {
          begin: /\bSET\s+(CATALOG|CONSTRAINTS)\b/
        }, {
          begin: /\b(WITH|FOR)\s+ORDINALITY\b/
        }, {
          begin: /\bIS\s+(NOT\s+)?DOCUMENT\b/
        }, {
          begin: /\bXML\s+OPTION\s+(DOCUMENT|CONTENT)\b/
        }, {
          begin: /\b(STRIP|PRESERVE)\s+WHITESPACE\b/
        }, {
          begin: /\bNO\s+(ACTION|MAXVALUE|MINVALUE)\b/
        }, {
          begin: /\bPARTITION\s+BY\s+(RANGE|LIST|HASH)\b/
        }, {
          begin: /\bAT\s+TIME\s+ZONE\b/
        }, {
          begin: /\bGRANTED\s+BY\b/
        }, {
          begin: /\bRETURN\s+(QUERY|NEXT)\b/
        }, {
          begin: /\b(ATTACH|DETACH)\s+PARTITION\b/
        }, {
          begin: /\bFORCE\s+ROW\s+LEVEL\s+SECURITY\b/
        }, {
          begin: /\b(INCLUDING|EXCLUDING)\s+(COMMENTS|CONSTRAINTS|DEFAULTS|IDENTITY|INDEXES|STATISTICS|STORAGE|ALL)\b/
        }, {
          begin: /\bAS\s+(ASSIGNMENT|IMPLICIT|PERMISSIVE|RESTRICTIVE|ENUM|RANGE)\b/
        }]
      }, {
        begin: /\b(FORMAT|FAMILY|VERSION)\s*\(/
      }, {
        begin: /\bINCLUDE\s*\(/,
        keywords: "INCLUDE"
      }, {
        begin: /\bRANGE(?!\s*(BETWEEN|UNBOUNDED|CURRENT|[-0-9]+))/
      }, {
        begin: /\b(VERSION|OWNER|TEMPLATE|TABLESPACE|CONNECTION\s+LIMIT|PROCEDURE|RESTRICT|JOIN|PARSER|COPY|START|END|COLLATION|INPUT|ANALYZE|STORAGE|LIKE|DEFAULT|DELIMITER|ENCODING|COLUMN|CONSTRAINT|TABLE|SCHEMA)\s*=/
      }, {
        begin: /\b(PG_\w+?|HAS_[A-Z_]+_PRIVILEGE)\b/,
        relevance: 10
      }, {
        begin: /\bEXTRACT\s*\(/,
        end: /\bFROM\b/,
        returnEnd: !0,
        keywords: {
          type: "CENTURY DAY DECADE DOW DOY EPOCH HOUR ISODOW ISOYEAR MICROSECONDS MILLENNIUM MILLISECONDS MINUTE MONTH QUARTER SECOND TIMEZONE TIMEZONE_HOUR TIMEZONE_MINUTE WEEK YEAR"
        }
      }, {
        begin: /\b(XMLELEMENT|XMLPI)\s*\(\s*NAME/,
        keywords: {
          keyword: "NAME"
        }
      }, {
        begin: /\b(XMLPARSE|XMLSERIALIZE)\s*\(\s*(DOCUMENT|CONTENT)/,
        keywords: {
          keyword: "DOCUMENT CONTENT"
        }
      }, {
        beginKeywords: "CACHE INCREMENT MAXVALUE MINVALUE",
        end: I.C_NUMBER_RE,
        returnEnd: !0,
        keywords: "BY CACHE INCREMENT MAXVALUE MINVALUE"
      }, {
        className: "type",
        begin: /\b(WITH|WITHOUT)\s+TIME\s+ZONE\b/
      }, {
        className: "type",
        begin: /\bINTERVAL\s+(YEAR|MONTH|DAY|HOUR|MINUTE|SECOND)(\s+TO\s+(MONTH|HOUR|MINUTE|SECOND))?\b/
      }, {
        begin: /\bRETURNS\s+(LANGUAGE_HANDLER|TRIGGER|EVENT_TRIGGER|FDW_HANDLER|INDEX_AM_HANDLER|TSM_HANDLER)\b/,
        keywords: {
          keyword: "RETURNS",
          type: "LANGUAGE_HANDLER TRIGGER EVENT_TRIGGER FDW_HANDLER INDEX_AM_HANDLER TSM_HANDLER"
        }
      }, {
        begin: "\\b(" + J + ")\\s*\\("
      }, {
        begin: "\\.(" + V + ")\\b"
      }, {
        begin: "\\b(" + V + ")\\s+PATH\\b",
        keywords: {
          keyword: "PATH",
          type: A.replace("PATH ", "")
        }
      }, {
        className: "type",
        begin: "\\b(" + V + ")\\b"
      }, {
        className: "string",
        begin: "'",
        end: "'",
        contains: [{
          begin: "''"
        }]
      }, {
        className: "string",
        begin: "(e|E|u&|U&)'",
        end: "'",
        contains: [{
          begin: "\\\\."
        }],
        relevance: 10
      }, I.END_SAME_AS_BEGIN({
        begin: "\\$([a-zA-Z_]?|[a-zA-Z_][a-zA-Z_0-9]*)\\$",
        end: "\\$([a-zA-Z_]?|[a-zA-Z_][a-zA-Z_0-9]*)\\$",
        contains: [{
          subLanguage: ["pgsql", "perl", "python", "tcl", "r", "lua", "java", "php", "ruby", "bash", "scheme", "xml", "json"],
          endsWithParent: !0
        }]
      }), {
        begin: '"',
        end: '"',
        contains: [{
          begin: '""'
        }]
      }, I.C_NUMBER_MODE, I.C_BLOCK_COMMENT_MODE, d, {
        className: "meta",
        variants: [{
          begin: "%(ROW)?TYPE",
          relevance: 10
        }, {
          begin: "\\$\\d+"
        }, {
          begin: "^#\\w",
          end: "$"
        }]
      }, {
        className: "symbol",
        begin: C,
        relevance: 10
      }]
    }
  }
  JY2.exports = J29
})
// @from(Start 4679062, End 4684550)
zY2 = Y((pF3, NY2) => {
  function K29(I) {
    let d = {
        className: "variable",
        begin: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*" + "(?![A-Za-z0-9])(?![$])"
      },
      G = {
        className: "meta",
        variants: [{
          begin: /<\?php/,
          relevance: 10
        }, {
          begin: /<\?[=]?/
        }, {
          begin: /\?>/
        }]
      },
      Z = {
        className: "subst",
        variants: [{
          begin: /\$\w+/
        }, {
          begin: /\{\$/,
          end: /\}/
        }]
      },
      C = I.inherit(I.APOS_STRING_MODE, {
        illegal: null
      }),
      W = I.inherit(I.QUOTE_STRING_MODE, {
        illegal: null,
        contains: I.QUOTE_STRING_MODE.contains.concat(Z)
      }),
      w = I.END_SAME_AS_BEGIN({
        begin: /<<<[ \t]*(\w+)\n/,
        end: /[ \t]*(\w+)\b/,
        contains: I.QUOTE_STRING_MODE.contains.concat(Z)
      }),
      B = {
        className: "string",
        contains: [I.BACKSLASH_ESCAPE, G],
        variants: [I.inherit(C, {
          begin: "b'",
          end: "'"
        }), I.inherit(W, {
          begin: 'b"',
          end: '"'
        }), W, C, w]
      },
      A = {
        className: "number",
        variants: [{
          begin: "\\b0b[01]+(?:_[01]+)*\\b"
        }, {
          begin: "\\b0o[0-7]+(?:_[0-7]+)*\\b"
        }, {
          begin: "\\b0x[\\da-f]+(?:_[\\da-f]+)*\\b"
        }, {
          begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:e[+-]?\\d+)?"
        }],
        relevance: 0
      },
      V = {
        keyword: "__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ die echo exit include include_once print require require_once array abstract and as binary bool boolean break callable case catch class clone const continue declare default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile enum eval extends final finally float for foreach from global goto if implements instanceof insteadof int integer interface isset iterable list match|0 mixed new object or private protected public real return string switch throw trait try unset use var void while xor yield",
        literal: "false null true",
        built_in: "Error|0 AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException UnhandledMatchError ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Stringable Throwable Traversable WeakReference WeakMap Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass"
      };
    return {
      aliases: ["php3", "php4", "php5", "php6", "php7", "php8"],
      case_insensitive: !0,
      keywords: V,
      contains: [I.HASH_COMMENT_MODE, I.COMMENT("//", "$", {
        contains: [G]
      }), I.COMMENT("/\\*", "\\*/", {
        contains: [{
          className: "doctag",
          begin: "@[A-Za-z]+"
        }]
      }), I.COMMENT("__halt_compiler.+?;", !1, {
        endsWithParent: !0,
        keywords: "__halt_compiler"
      }), G, {
        className: "keyword",
        begin: /\$this\b/
      }, d, {
        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
      }, {
        className: "function",
        relevance: 0,
        beginKeywords: "fn function",
        end: /[;{]/,
        excludeEnd: !0,
        illegal: "[$%\\[]",
        contains: [{
          beginKeywords: "use"
        }, I.UNDERSCORE_TITLE_MODE, {
          begin: "=>",
          endsParent: !0
        }, {
          className: "params",
          begin: "\\(",
          end: "\\)",
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: V,
          contains: ["self", d, I.C_BLOCK_COMMENT_MODE, B, A]
        }]
      }, {
        className: "class",
        variants: [{
          beginKeywords: "enum",
          illegal: /[($"]/
        }, {
          beginKeywords: "class interface trait",
          illegal: /[:($"]/
        }],
        relevance: 0,
        end: /\{/,
        excludeEnd: !0,
        contains: [{
          beginKeywords: "extends implements"
        }, I.UNDERSCORE_TITLE_MODE]
      }, {
        beginKeywords: "namespace",
        relevance: 0,
        end: ";",
        illegal: /[.']/,
        contains: [I.UNDERSCORE_TITLE_MODE]
      }, {
        beginKeywords: "use",
        relevance: 0,
        end: ";",
        contains: [I.UNDERSCORE_TITLE_MODE]
      }, B, A]
    }
  }
  NY2.exports = K29
})
// @from(Start 4684556, End 4685337)
fY2 = Y((iF3, QY2) => {
  function N29(I) {
    return {
      name: "PHP template",
      subLanguage: "xml",
      contains: [{
        begin: /<\?(php|=)?/,
        end: /\?>/,
        subLanguage: "php",
        contains: [{
          begin: "/\\*",
          end: "\\*/",
          skip: !0
        }, {
          begin: 'b"',
          end: '"',
          skip: !0
        }, {
          begin: "b'",
          end: "'",
          skip: !0
        }, I.inherit(I.APOS_STRING_MODE, {
          illegal: null,
          className: null,
          contains: null,
          skip: !0
        }), I.inherit(I.QUOTE_STRING_MODE, {
          illegal: null,
          className: null,
          contains: null,
          skip: !0
        })]
      }]
    }
  }
  QY2.exports = N29
})
// @from(Start 4685343, End 4685518)
RY2 = Y((nF3, qY2) => {
  function z29(I) {
    return {
      name: "Plain text",
      aliases: ["text", "txt"],
      disableAutodetect: !0
    }
  }
  qY2.exports = z29
})
// @from(Start 4685524, End 4686894)
vY2 = Y((rF3, UY2) => {
  function Q29(I) {
    let d = {
        keyword: "actor addressof and as be break class compile_error compile_intrinsic consume continue delegate digestof do else elseif embed end error for fun if ifdef in interface is isnt lambda let match new not object or primitive recover repeat return struct then trait try type until use var where while with xor",
        meta: "iso val tag trn box ref",
        literal: "this false true"
      },
      G = {
        className: "string",
        begin: '"""',
        end: '"""',
        relevance: 10
      },
      Z = {
        className: "string",
        begin: '"',
        end: '"',
        contains: [I.BACKSLASH_ESCAPE]
      },
      C = {
        className: "string",
        begin: "'",
        end: "'",
        contains: [I.BACKSLASH_ESCAPE],
        relevance: 0
      },
      W = {
        className: "type",
        begin: "\\b_?[A-Z][\\w]*",
        relevance: 0
      },
      w = {
        begin: I.IDENT_RE + "'",
        relevance: 0
      };
    return {
      name: "Pony",
      keywords: d,
      contains: [W, G, Z, C, w, {
        className: "number",
        begin: "(-?)(\\b0[xX][a-fA-F0-9]+|\\b0[bB][01]+|(\\b\\d+(_\\d+)?(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
        relevance: 0
      }, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
    }
  }
  UY2.exports = Q29
})
// @from(Start 4686900, End 4693076)
MY2 = Y((aF3, EY2) => {
  function f29(I) {
    let d = ["string", "char", "byte", "int", "long", "bool", "decimal", "single", "double", "DateTime", "xml", "array", "hashtable", "void"],
      G = "Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where",
      Z = "-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor",
      C = {
        $pattern: /-?[A-z\.\-]+\b/,
        keyword: "if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter",
        built_in: "ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write"
      },
      W = /\w[\w\d]*((-)[\w\d]+)*/,
      w = {
        begin: "`[\\s\\S]",
        relevance: 0
      },
      B = {
        className: "variable",
        variants: [{
          begin: /\$\B/
        }, {
          className: "keyword",
          begin: /\$this/
        }, {
          begin: /\$[\w\d][\w\d_:]*/
        }]
      },
      A = {
        className: "literal",
        begin: /\$(null|true|false)\b/
      },
      V = {
        className: "string",
        variants: [{
          begin: /"/,
          end: /"/
        }, {
          begin: /@"/,
          end: /^"@/
        }],
        contains: [w, B, {
          className: "variable",
          begin: /\$[A-z]/,
          end: /[^A-z]/
        }]
      },
      X = {
        className: "string",
        variants: [{
          begin: /'/,
          end: /'/
        }, {
          begin: /@'/,
          end: /^'@/
        }]
      },
      _ = {
        className: "doctag",
        variants: [{
          begin: /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/
        }, {
          begin: /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/
        }]
      },
      F = I.inherit(I.COMMENT(null, null), {
        variants: [{
          begin: /#/,
          end: /$/
        }, {
          begin: /<#/,
          end: /#>/
        }],
        contains: [_]
      }),
      g = {
        className: "built_in",
        variants: [{
          begin: "(".concat(G, ")+(-)[\\w\\d]+")
        }]
      },
      J = {
        className: "class",
        beginKeywords: "class enum",
        end: /\s*[{]/,
        excludeEnd: !0,
        relevance: 0,
        contains: [I.TITLE_MODE]
      },
      K = {
        className: "function",
        begin: /function\s+/,
        end: /\s*\{|$/,
        excludeEnd: !0,
        returnBegin: !0,
        relevance: 0,
        contains: [{
          begin: "function",
          relevance: 0,
          className: "keyword"
        }, {
          className: "title",
          begin: W,
          relevance: 0
        }, {
          begin: /\(/,
          end: /\)/,
          className: "params",
          relevance: 0,
          contains: [B]
        }]
      },
      Q = {
        begin: /using\s/,
        end: /$/,
        returnBegin: !0,
        contains: [V, X, {
          className: "keyword",
          begin: /(using|assembly|command|module|namespace|type)/
        }]
      },
      E = {
        variants: [{
          className: "operator",
          begin: "(".concat(Z, ")\\b")
        }, {
          className: "literal",
          begin: /(-)[\w\d]+/,
          relevance: 0
        }]
      },
      S = {
        className: "selector-tag",
        begin: /@\B/,
        relevance: 0
      },
      P = {
        className: "function",
        begin: /\[.*\]\s*[\w]+[ ]??\(/,
        end: /$/,
        returnBegin: !0,
        relevance: 0,
        contains: [{
          className: "keyword",
          begin: "(".concat(C.keyword.toString().replace(/\s/g, "|"), ")\\b"),
          endsParent: !0,
          relevance: 0
        }, I.inherit(I.TITLE_MODE, {
          endsParent: !0
        })]
      },
      $ = [P, F, w, I.NUMBER_MODE, V, X, g, B, A, S],
      h = {
        begin: /\[/,
        end: /\]/,
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0,
        contains: [].concat("self", $, {
          begin: "(" + d.join("|") + ")",
          className: "built_in",
          relevance: 0
        }, {
          className: "type",
          begin: /[\.\w\d]+/,
          relevance: 0
        })
      };
    return P.contains.unshift(h), {
      name: "PowerShell",
      aliases: ["ps", "ps1"],
      case_insensitive: !0,
      keywords: C,
      contains: $.concat(J, K, Q, E, h)
    }
  }
  EY2.exports = f29
})
// @from(Start 4693082, End 4696292)
LY2 = Y((sF3, SY2) => {
  function q29(I) {
    return {
      name: "Processing",
      keywords: {
        keyword: "BufferedReader PVector PFont PImage PGraphics HashMap boolean byte char color double float int long String Array FloatDict FloatList IntDict IntList JSONArray JSONObject Object StringDict StringList Table TableRow XML false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
        literal: "P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI",
        title: "setup draw",
        built_in: "displayHeight displayWidth mouseY mouseX mousePressed pmouseX pmouseY key keyCode pixels focused frameCount frameRate height width size createGraphics beginDraw createShape loadShape PShape arc ellipse line point quad rect triangle bezier bezierDetail bezierPoint bezierTangent curve curveDetail curvePoint curveTangent curveTightness shape shapeMode beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight mouseClicked mouseDragged mouseMoved mousePressed mouseReleased mouseWheel keyPressed keyPressedkeyReleased keyTyped print println save saveFrame day hour millis minute month second year background clear colorMode fill noFill noStroke stroke alpha blue brightness color green hue lerpColor red saturation modelX modelY modelZ screenX screenY screenZ ambient emissive shininess specular add createImage beginCamera camera endCamera frustum ortho perspective printCamera printProjection cursor frameRate noCursor exit loop noLoop popStyle pushStyle redraw binary boolean byte char float hex int str unbinary unhex join match matchAll nf nfc nfp nfs split splitTokens trim append arrayCopy concat expand reverse shorten sort splice subset box sphere sphereDetail createInput createReader loadBytes loadJSONArray loadJSONObject loadStrings loadTable loadXML open parseXML saveTable selectFolder selectInput beginRaw beginRecord createOutput createWriter endRaw endRecord PrintWritersaveBytes saveJSONArray saveJSONObject saveStream saveStrings saveXML selectOutput popMatrix printMatrix pushMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate ambientLight directionalLight lightFalloff lights lightSpecular noLights normal pointLight spotLight image imageMode loadImage noTint requestImage tint texture textureMode textureWrap blend copy filter get loadPixels set updatePixels blendMode loadShader PShaderresetShader shader createFont loadFont text textFont textAlign textLeading textMode textSize textWidth textAscent textDescent abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt acos asin atan atan2 cos degrees radians sin tan noise noiseDetail noiseSeed random randomGaussian randomSeed"
      },
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.C_NUMBER_MODE]
    }
  }
  SY2.exports = q29
})
// @from(Start 4696298, End 4697034)
PY2 = Y((oF3, yY2) => {
  function R29(I) {
    return {
      name: "Python profiler",
      contains: [I.C_NUMBER_MODE, {
        begin: "[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}",
        end: ":",
        excludeEnd: !0
      }, {
        begin: "(ncalls|tottime|cumtime)",
        end: "$",
        keywords: "ncalls tottime|10 cumtime|10 filename",
        relevance: 10
      }, {
        begin: "function calls",
        end: "$",
        contains: [I.C_NUMBER_MODE],
        relevance: 10
      }, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, {
        className: "string",
        begin: "\\(",
        end: "\\)$",
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0
      }]
    }
  }
  yY2.exports = R29
})
// @from(Start 4697040, End 4698210)
uY2 = Y((eF3, $Y2) => {
  function U29(I) {
    let d = {
        begin: /[a-z][A-Za-z0-9_]*/,
        relevance: 0
      },
      G = {
        className: "symbol",
        variants: [{
          begin: /[A-Z][a-zA-Z0-9_]*/
        }, {
          begin: /_[A-Za-z0-9_]*/
        }],
        relevance: 0
      },
      Z = {
        begin: /\(/,
        end: /\)/,
        relevance: 0
      },
      C = {
        begin: /\[/,
        end: /\]/
      },
      W = {
        className: "comment",
        begin: /%/,
        end: /$/,
        contains: [I.PHRASAL_WORDS_MODE]
      },
      w = {
        className: "string",
        begin: /`/,
        end: /`/,
        contains: [I.BACKSLASH_ESCAPE]
      },
      B = {
        className: "string",
        begin: /0'(\\'|.)/
      },
      A = {
        className: "string",
        begin: /0'\\s/
      },
      X = [d, G, Z, {
        begin: /:-/
      }, C, W, I.C_BLOCK_COMMENT_MODE, I.QUOTE_STRING_MODE, I.APOS_STRING_MODE, w, B, A, I.C_NUMBER_MODE];
    return Z.contains = X, C.contains = X, {
      name: "Prolog",
      contains: X.concat([{
        begin: /\.$/
      }])
    }
  }
  $Y2.exports = U29
})
// @from(Start 4698216, End 4699551)
OY2 = Y((tF3, TY2) => {
  function v29(I) {
    var d = "[ \\t\\f]*",
      G = "[ \\t\\f]+",
      Z = d + "[:=]" + d,
      C = G,
      W = "(" + Z + "|" + C + ")",
      w = "([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",
      B = "([^\\\\:= \\t\\f\\n]|\\\\.)+",
      A = {
        end: W,
        relevance: 0,
        starts: {
          className: "string",
          end: /$/,
          relevance: 0,
          contains: [{
            begin: "\\\\\\\\"
          }, {
            begin: "\\\\\\n"
          }]
        }
      };
    return {
      name: ".properties",
      case_insensitive: !0,
      illegal: /\S/,
      contains: [I.COMMENT("^\\s*[!#]", "$"), {
        returnBegin: !0,
        variants: [{
          begin: w + Z,
          relevance: 1
        }, {
          begin: w + C,
          relevance: 0
        }],
        contains: [{
          className: "attr",
          begin: w,
          endsParent: !0,
          relevance: 0
        }],
        starts: A
      }, {
        begin: B + W,
        returnBegin: !0,
        relevance: 0,
        contains: [{
          className: "meta",
          begin: B,
          endsParent: !0,
          relevance: 0
        }],
        starts: A
      }, {
        className: "attr",
        relevance: 0,
        begin: B + d + "$"
      }]
    }
  }
  TY2.exports = v29
})
// @from(Start 4699557, End 4700523)
lY2 = Y((Ig3, mY2) => {
  function E29(I) {
    return {
      name: "Protocol Buffers",
      keywords: {
        keyword: "package import option optional required repeated group oneof",
        built_in: "double float int32 int64 uint32 uint64 sint32 sint64 fixed32 fixed64 sfixed32 sfixed64 bool string bytes",
        literal: "true false"
      },
      contains: [I.QUOTE_STRING_MODE, I.NUMBER_MODE, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, {
        className: "class",
        beginKeywords: "message enum service",
        end: /\{/,
        illegal: /\n/,
        contains: [I.inherit(I.TITLE_MODE, {
          starts: {
            endsWithParent: !0,
            excludeEnd: !0
          }
        })]
      }, {
        className: "function",
        beginKeywords: "rpc",
        end: /[{;]/,
        excludeEnd: !0,
        keywords: "rpc returns"
      }, {
        begin: /^\s*[A-Z_]+(?=\s*=[^\n]+;$)/
      }]
    }
  }
  mY2.exports = E29
})
// @from(Start 4700529, End 4705407)
hY2 = Y((dg3, bY2) => {
  function M29(I) {
    let d = {
        keyword: "and case default else elsif false if in import enherits node or true undef unless main settings $string ",
        literal: "alias audit before loglevel noop require subscribe tag owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check en_address ip_address realname command environment hour monute month monthday special target weekday creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey sslverify mounted",
        built_in: "architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version"
      },
      G = I.COMMENT("#", "$"),
      Z = "([A-Za-z_]|::)(\\w|::)*",
      C = I.inherit(I.TITLE_MODE, {
        begin: "([A-Za-z_]|::)(\\w|::)*"
      }),
      W = {
        className: "variable",
        begin: "\\$([A-Za-z_]|::)(\\w|::)*"
      },
      w = {
        className: "string",
        contains: [I.BACKSLASH_ESCAPE, W],
        variants: [{
          begin: /'/,
          end: /'/
        }, {
          begin: /"/,
          end: /"/
        }]
      };
    return {
      name: "Puppet",
      aliases: ["pp"],
      contains: [G, W, w, {
        beginKeywords: "class",
        end: "\\{|;",
        illegal: /=/,
        contains: [C, G]
      }, {
        beginKeywords: "define",
        end: /\{/,
        contains: [{
          className: "section",
          begin: I.IDENT_RE,
          endsParent: !0
        }]
      }, {
        begin: I.IDENT_RE + "\\s+\\{",
        returnBegin: !0,
        end: /\S/,
        contains: [{
          className: "keyword",
          begin: I.IDENT_RE
        }, {
          begin: /\{/,
          end: /\}/,
          keywords: d,
          relevance: 0,
          contains: [w, G, {
            begin: "[a-zA-Z_]+\\s*=>",
            returnBegin: !0,
            end: "=>",
            contains: [{
              className: "attr",
              begin: I.IDENT_RE
            }]
          }, {
            className: "number",
            begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            relevance: 0
          }, W]
        }],
        relevance: 0
      }]
    }
  }
  bY2.exports = M29
})
// @from(Start 4705413, End 4707326)
kY2 = Y((Gg3, jY2) => {
  function S29(I) {
    let d = {
        className: "string",
        begin: '(~)?"',
        end: '"',
        illegal: "\\n"
      },
      G = {
        className: "symbol",
        begin: "#[a-zA-Z_]\\w*\\$?"
      };
    return {
      name: "PureBASIC",
      aliases: ["pb", "pbi"],
      keywords: "Align And Array As Break CallDebugger Case CompilerCase CompilerDefault CompilerElse CompilerElseIf CompilerEndIf CompilerEndSelect CompilerError CompilerIf CompilerSelect CompilerWarning Continue Data DataSection Debug DebugLevel Declare DeclareC DeclareCDLL DeclareDLL DeclareModule Default Define Dim DisableASM DisableDebugger DisableExplicit Else ElseIf EnableASM EnableDebugger EnableExplicit End EndDataSection EndDeclareModule EndEnumeration EndIf EndImport EndInterface EndMacro EndModule EndProcedure EndSelect EndStructure EndStructureUnion EndWith Enumeration EnumerationBinary Extends FakeReturn For ForEach ForEver Global Gosub Goto If Import ImportC IncludeBinary IncludeFile IncludePath Interface List Macro MacroExpandedCount Map Module NewList NewMap Next Not Or Procedure ProcedureC ProcedureCDLL ProcedureDLL ProcedureReturn Protected Prototype PrototypeC ReDim Read Repeat Restore Return Runtime Select Shared Static Step Structure StructureUnion Swap Threaded To UndefineMacro Until Until  UnuseModule UseModule Wend While With XIncludeFile XOr",
      contains: [I.COMMENT(";", "$", {
        relevance: 0
      }), {
        className: "function",
        begin: "\\b(Procedure|Declare)(C|CDLL|DLL)?\\b",
        end: "\\(",
        excludeEnd: !0,
        returnBegin: !0,
        contains: [{
          className: "keyword",
          begin: "(Procedure|Declare)(C|CDLL|DLL)?",
          excludeEnd: !0
        }, {
          className: "type",
          begin: "\\.\\w*"
        }, I.UNDERSCORE_TITLE_MODE]
      }, d, G]
    }
  }
  jY2.exports = S29
})
// @from(Start 4707332, End 4712679)
cY2 = Y((Zg3, xY2) => {
  function L29(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function y29(I) {
    return P29("(?=", I, ")")
  }

  function P29(...I) {
    return I.map((G) => L29(G)).join("")
  }

  function $29(I) {
    let W = {
        $pattern: /[A-Za-z]\w+|__\w+__/,
        keyword: ["and", "as", "assert", "async", "await", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "nonlocal|10", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"],
        built_in: ["__import__", "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"],
        literal: ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"],
        type: ["Any", "Callable", "Coroutine", "Dict", "List", "Literal", "Generic", "Optional", "Sequence", "Set", "Tuple", "Type", "Union"]
      },
      w = {
        className: "meta",
        begin: /^(>>>|\.\.\.) /
      },
      B = {
        className: "subst",
        begin: /\{/,
        end: /\}/,
        keywords: W,
        illegal: /#/
      },
      A = {
        begin: /\{\{/,
        relevance: 0
      },
      V = {
        className: "string",
        contains: [I.BACKSLASH_ESCAPE],
        variants: [{
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
          end: /'''/,
          contains: [I.BACKSLASH_ESCAPE, w],
          relevance: 10
        }, {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
          end: /"""/,
          contains: [I.BACKSLASH_ESCAPE, w],
          relevance: 10
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])'''/,
          end: /'''/,
          contains: [I.BACKSLASH_ESCAPE, w, A, B]
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])"""/,
          end: /"""/,
          contains: [I.BACKSLASH_ESCAPE, w, A, B]
        }, {
          begin: /([uU]|[rR])'/,
          end: /'/,
          relevance: 10
        }, {
          begin: /([uU]|[rR])"/,
          end: /"/,
          relevance: 10
        }, {
          begin: /([bB]|[bB][rR]|[rR][bB])'/,
          end: /'/
        }, {
          begin: /([bB]|[bB][rR]|[rR][bB])"/,
          end: /"/
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])'/,
          end: /'/,
          contains: [I.BACKSLASH_ESCAPE, A, B]
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])"/,
          end: /"/,
          contains: [I.BACKSLASH_ESCAPE, A, B]
        }, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE]
      },
      X = "[0-9](_?[0-9])*",
      _ = "(\\b([0-9](_?[0-9])*))?\\.([0-9](_?[0-9])*)|\\b([0-9](_?[0-9])*)\\.",
      F = {
        className: "number",
        relevance: 0,
        variants: [{
          begin: "(\\b([0-9](_?[0-9])*)|((\\b([0-9](_?[0-9])*))?\\.([0-9](_?[0-9])*)|\\b([0-9](_?[0-9])*)\\.))[eE][+-]?([0-9](_?[0-9])*)[jJ]?\\b"
        }, {
          begin: "((\\b([0-9](_?[0-9])*))?\\.([0-9](_?[0-9])*)|\\b([0-9](_?[0-9])*)\\.)[jJ]?"
        }, {
          begin: "\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b"
        }, {
          begin: "\\b0[bB](_?[01])+[lL]?\\b"
        }, {
          begin: "\\b0[oO](_?[0-7])+[lL]?\\b"
        }, {
          begin: "\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b"
        }, {
          begin: "\\b([0-9](_?[0-9])*)[jJ]\\b"
        }]
      },
      g = {
        className: "comment",
        begin: y29(/# type:/),
        end: /$/,
        keywords: W,
        contains: [{
          begin: /# type:/
        }, {
          begin: /#/,
          end: /\b\B/,
          endsWithParent: !0
        }]
      },
      J = {
        className: "params",
        variants: [{
          className: "",
          begin: /\(\s*\)/,
          skip: !0
        }, {
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: W,
          contains: ["self", w, F, V, I.HASH_COMMENT_MODE]
        }]
      };
    return B.contains = [V, F, w], {
      name: "Python",
      aliases: ["py", "gyp", "ipython"],
      keywords: W,
      illegal: /(<\/|->|\?)|=>/,
      contains: [w, F, {
        begin: /\bself\b/
      }, {
        beginKeywords: "if",
        relevance: 0
      }, V, g, I.HASH_COMMENT_MODE, {
        variants: [{
          className: "function",
          beginKeywords: "def"
        }, {
          className: "class",
          beginKeywords: "class"
        }],
        end: /:/,
        illegal: /[${=;\n,]/,
        contains: [I.UNDERSCORE_TITLE_MODE, J, {
          begin: /->/,
          endsWithParent: !0,
          keywords: W
        }]
      }, {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [F, J, V]
      }]
    }
  }
  xY2.exports = $29
})
// @from(Start 4712685, End 4713108)
iY2 = Y((Cg3, pY2) => {
  function u29(I) {
    return {
      aliases: ["pycon"],
      contains: [{
        className: "meta",
        starts: {
          end: / |$/,
          starts: {
            end: "$",
            subLanguage: "python"
          }
        },
        variants: [{
          begin: /^>>>(?=[ ]|$)/
        }, {
          begin: /^\.\.\.(?=[ ]|$)/
        }]
      }]
    }
  }
  pY2.exports = u29
})
// @from(Start 4713114, End 4714378)
rY2 = Y((Wg3, nY2) => {
  function T29(I) {
    return {
      name: "Q",
      aliases: ["k", "kdb"],
      keywords: {
        $pattern: /(`?)[A-Za-z0-9_]+\b/,
        keyword: "do while select delete by update from",
        literal: "0b 1b",
        built_in: "neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum",
        type: "`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid"
      },
      contains: [I.C_LINE_COMMENT_MODE, I.QUOTE_STRING_MODE, I.C_NUMBER_MODE]
    }
  }
  nY2.exports = T29
})
// @from(Start 4714384, End 4718524)
sY2 = Y((wg3, aY2) => {
  function O29(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function m29(...I) {
    return I.map((G) => O29(G)).join("")
  }

  function l29(I) {
    let d = {
        keyword: "in of on if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await import",
        literal: "true false null undefined NaN Infinity",
        built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Behavior bool color coordinate date double enumeration font geocircle georectangle geoshape int list matrix4x4 parent point quaternion real rect size string url variant vector2d vector3d vector4d Promise"
      },
      G = "[a-zA-Z_][a-zA-Z0-9\\._]*",
      Z = {
        className: "keyword",
        begin: "\\bproperty\\b",
        starts: {
          className: "string",
          end: "(:|=|;|,|//|/\\*|$)",
          returnEnd: !0
        }
      },
      C = {
        className: "keyword",
        begin: "\\bsignal\\b",
        starts: {
          className: "string",
          end: "(\\(|:|=|;|,|//|/\\*|$)",
          returnEnd: !0
        }
      },
      W = {
        className: "attribute",
        begin: "\\bid\\s*:",
        starts: {
          className: "string",
          end: "[a-zA-Z_][a-zA-Z0-9\\._]*",
          returnEnd: !1
        }
      },
      w = {
        begin: "[a-zA-Z_][a-zA-Z0-9\\._]*\\s*:",
        returnBegin: !0,
        contains: [{
          className: "attribute",
          begin: "[a-zA-Z_][a-zA-Z0-9\\._]*",
          end: "\\s*:",
          excludeEnd: !0,
          relevance: 0
        }],
        relevance: 0
      },
      B = {
        begin: m29("[a-zA-Z_][a-zA-Z0-9\\._]*", /\s*\{/),
        end: /\{/,
        returnBegin: !0,
        relevance: 0,
        contains: [I.inherit(I.TITLE_MODE, {
          begin: "[a-zA-Z_][a-zA-Z0-9\\._]*"
        })]
      };
    return {
      name: "QML",
      aliases: ["qt"],
      case_insensitive: !1,
      keywords: d,
      contains: [{
        className: "meta",
        begin: /^\s*['"]use (strict|asm)['"]/
      }, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, {
        className: "string",
        begin: "`",
        end: "`",
        contains: [I.BACKSLASH_ESCAPE, {
          className: "subst",
          begin: "\\$\\{",
          end: "\\}"
        }]
      }, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, {
        className: "number",
        variants: [{
          begin: "\\b(0[bB][01]+)"
        }, {
          begin: "\\b(0[oO][0-7]+)"
        }, {
          begin: I.C_NUMBER_RE
        }],
        relevance: 0
      }, {
        begin: "(" + I.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.REGEXP_MODE, {
          begin: /</,
          end: />\s*[);\]]/,
          relevance: 0,
          subLanguage: "xml"
        }],
        relevance: 0
      }, C, Z, {
        className: "function",
        beginKeywords: "function",
        end: /\{/,
        excludeEnd: !0,
        contains: [I.inherit(I.TITLE_MODE, {
          begin: /[A-Za-z$_][0-9A-Za-z$_]*/
        }), {
          className: "params",
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
        }],
        illegal: /\[|%/
      }, {
        begin: "\\." + I.IDENT_RE,
        relevance: 0
      }, W, w, B],
      illegal: /#/
    }
  }
  aY2.exports = l29
})
// @from(Start 4718530, End 4723024)
eY2 = Y((Bg3, oY2) => {
  function b29(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function h29(I) {
    return iF1("(?=", I, ")")
  }

  function iF1(...I) {
    return I.map((G) => b29(G)).join("")
  }

  function j29(I) {
    let d = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,
      G = /[a-zA-Z][a-zA-Z_0-9]*/;
    return {
      name: "R",
      illegal: /->/,
      keywords: {
        $pattern: d,
        keyword: "function if in break next repeat else for while",
        literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
        built_in: "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
      },
      compilerExtensions: [(Z, C) => {
        if (!Z.beforeMatch) return;
        if (Z.starts) throw new Error("beforeMatch cannot be used with starts");
        let W = Object.assign({}, Z);
        Object.keys(Z).forEach((w) => {
          delete Z[w]
        }), Z.begin = iF1(W.beforeMatch, h29(W.begin)), Z.starts = {
          relevance: 0,
          contains: [Object.assign(W, {
            endsParent: !0
          })]
        }, Z.relevance = 0, delete W.beforeMatch
      }],
      contains: [I.COMMENT(/#'/, /$/, {
        contains: [{
          className: "doctag",
          begin: "@examples",
          starts: {
            contains: [{
              begin: /\n/
            }, {
              begin: /#'\s*(?=@[a-zA-Z]+)/,
              endsParent: !0
            }, {
              begin: /#'/,
              end: /$/,
              excludeBegin: !0
            }]
          }
        }, {
          className: "doctag",
          begin: "@param",
          end: /$/,
          contains: [{
            className: "variable",
            variants: [{
              begin: d
            }, {
              begin: /`(?:\\.|[^`\\])+`/
            }],
            endsParent: !0
          }]
        }, {
          className: "doctag",
          begin: /@[a-zA-Z]+/
        }, {
          className: "meta-keyword",
          begin: /\\[a-zA-Z]+/
        }]
      }), I.HASH_COMMENT_MODE, {
        className: "string",
        contains: [I.BACKSLASH_ESCAPE],
        variants: [I.END_SAME_AS_BEGIN({
          begin: /[rR]"(-*)\(/,
          end: /\)(-*)"/
        }), I.END_SAME_AS_BEGIN({
          begin: /[rR]"(-*)\{/,
          end: /\}(-*)"/
        }), I.END_SAME_AS_BEGIN({
          begin: /[rR]"(-*)\[/,
          end: /\](-*)"/
        }), I.END_SAME_AS_BEGIN({
          begin: /[rR]'(-*)\(/,
          end: /\)(-*)'/
        }), I.END_SAME_AS_BEGIN({
          begin: /[rR]'(-*)\{/,
          end: /\}(-*)'/
        }), I.END_SAME_AS_BEGIN({
          begin: /[rR]'(-*)\[/,
          end: /\](-*)'/
        }), {
          begin: '"',
          end: '"',
          relevance: 0
        }, {
          begin: "'",
          end: "'",
          relevance: 0
        }]
      }, {
        className: "number",
        relevance: 0,
        beforeMatch: /([^a-zA-Z0-9._])/,
        variants: [{
          match: /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/
        }, {
          match: /0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/
        }, {
          match: /(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/
        }]
      }, {
        begin: "%",
        end: "%"
      }, {
        begin: iF1(G, "\\s+<-\\s+")
      }, {
        begin: "`",
        end: "`",
        contains: [{
          begin: /\\./
        }]
      }]
    }
  }
  oY2.exports = j29
})
// @from(Start 4723030, End 4728489)
I_2 = Y((Ag3, tY2) => {
  function k29(I) {
    function d(h) {
      return h.map(function(O) {
        return O.split("").map(function(T) {
          return "\\" + T
        }).join("")
      }).join("|")
    }
    let G = "~?[a-z$_][0-9a-zA-Z$_]*",
      Z = "`?[A-Z$_][0-9a-zA-Z$_]*",
      C = "'?[a-z$_][0-9a-z$_]*",
      W = "\\s*:\\s*[a-z$_][0-9a-z$_]*(\\(\\s*(" + C + "\\s*(," + C + "\\s*)*)?\\))?",
      w = G + "(" + W + "){0,2}",
      B = "(" + d(["||", "++", "**", "+.", "*", "/", "*.", "/.", "..."]) + "|\\|>|&&|==|===)",
      A = "\\s+" + B + "\\s+",
      V = {
        keyword: "and as asr assert begin class constraint do done downto else end exception external for fun function functor if in include inherit initializer land lazy let lor lsl lsr lxor match method mod module mutable new nonrec object of open or private rec sig struct then to try type val virtual when while with",
        built_in: "array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ",
        literal: "true false"
      },
      X = "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
      _ = {
        className: "number",
        relevance: 0,
        variants: [{
          begin: X
        }, {
          begin: "\\(-" + X + "\\)"
        }]
      },
      F = {
        className: "operator",
        relevance: 0,
        begin: B
      },
      g = [{
        className: "identifier",
        relevance: 0,
        begin: G
      }, F, _],
      J = [I.QUOTE_STRING_MODE, F, {
        className: "module",
        begin: "\\b" + Z,
        returnBegin: !0,
        end: ".",
        contains: [{
          className: "identifier",
          begin: Z,
          relevance: 0
        }]
      }],
      K = [{
        className: "module",
        begin: "\\b" + Z,
        returnBegin: !0,
        end: ".",
        relevance: 0,
        contains: [{
          className: "identifier",
          begin: Z,
          relevance: 0
        }]
      }],
      Q = {
        begin: G,
        end: "(,|\\n|\\))",
        relevance: 0,
        contains: [F, {
          className: "typing",
          begin: ":",
          end: "(,|\\n)",
          returnBegin: !0,
          relevance: 0,
          contains: K
        }]
      },
      E = {
        className: "function",
        relevance: 0,
        keywords: V,
        variants: [{
          begin: "\\s(\\(\\.?.*?\\)|" + G + ")\\s*=>",
          end: "\\s*=>",
          returnBegin: !0,
          relevance: 0,
          contains: [{
            className: "params",
            variants: [{
              begin: G
            }, {
              begin: w
            }, {
              begin: /\(\s*\)/
            }]
          }]
        }, {
          begin: "\\s\\(\\.?[^;\\|]*\\)\\s*=>",
          end: "\\s=>",
          returnBegin: !0,
          relevance: 0,
          contains: [{
            className: "params",
            relevance: 0,
            variants: [Q]
          }]
        }, {
          begin: "\\(\\.\\s" + G + "\\)\\s*=>"
        }]
      };
    J.push(E);
    let S = {
        className: "constructor",
        begin: Z + "\\(",
        end: "\\)",
        illegal: "\\n",
        keywords: V,
        contains: [I.QUOTE_STRING_MODE, F, {
          className: "params",
          begin: "\\b" + G
        }]
      },
      P = {
        className: "pattern-match",
        begin: "\\|",
        returnBegin: !0,
        keywords: V,
        end: "=>",
        relevance: 0,
        contains: [S, F, {
          relevance: 0,
          className: "constructor",
          begin: Z
        }]
      },
      $ = {
        className: "module-access",
        keywords: V,
        returnBegin: !0,
        variants: [{
          begin: "\\b(" + Z + "\\.)+" + G
        }, {
          begin: "\\b(" + Z + "\\.)+\\(",
          end: "\\)",
          returnBegin: !0,
          contains: [E, {
            begin: "\\(",
            end: "\\)",
            skip: !0
          }].concat(J)
        }, {
          begin: "\\b(" + Z + "\\.)+\\{",
          end: /\}/
        }],
        contains: J
      };
    return K.push($), {
      name: "ReasonML",
      aliases: ["re"],
      keywords: V,
      illegal: "(:-|:=|\\$\\{|\\+=)",
      contains: [I.COMMENT("/\\*", "\\*/", {
        illegal: "^(#,\\/\\/)"
      }), {
        className: "character",
        begin: "'(\\\\[^']+|[^'])'",
        illegal: "\\n",
        relevance: 0
      }, I.QUOTE_STRING_MODE, {
        className: "literal",
        begin: "\\(\\)",
        relevance: 0
      }, {
        className: "literal",
        begin: "\\[\\|",
        end: "\\|\\]",
        relevance: 0,
        contains: g
      }, {
        className: "literal",
        begin: "\\[",
        end: "\\]",
        relevance: 0,
        contains: g
      }, S, {
        className: "operator",
        begin: A,
        illegal: "-->",
        relevance: 0
      }, _, I.C_LINE_COMMENT_MODE, P, E, {
        className: "module-def",
        begin: "\\bmodule\\s+" + G + "\\s+" + Z + "\\s+=\\s+\\{",
        end: /\}/,
        returnBegin: !0,
        keywords: V,
        relevance: 0,
        contains: [{
          className: "module",
          relevance: 0,
          begin: Z
        }, {
          begin: /\{/,
          end: /\}/,
          skip: !0
        }].concat(J)
      }, $]
    }
  }
  tY2.exports = k29
})
// @from(Start 4728495, End 4729853)
G_2 = Y((Vg3, d_2) => {
  function x29(I) {
    return {
      name: "RenderMan RIB",
      keywords: "ArchiveRecord AreaLightSource Atmosphere Attribute AttributeBegin AttributeEnd Basis Begin Blobby Bound Clipping ClippingPlane Color ColorSamples ConcatTransform Cone CoordinateSystem CoordSysTransform CropWindow Curves Cylinder DepthOfField Detail DetailRange Disk Displacement Display End ErrorHandler Exposure Exterior Format FrameAspectRatio FrameBegin FrameEnd GeneralPolygon GeometricApproximation Geometry Hider Hyperboloid Identity Illuminate Imager Interior LightSource MakeCubeFaceEnvironment MakeLatLongEnvironment MakeShadow MakeTexture Matte MotionBegin MotionEnd NuPatch ObjectBegin ObjectEnd ObjectInstance Opacity Option Orientation Paraboloid Patch PatchMesh Perspective PixelFilter PixelSamples PixelVariance Points PointsGeneralPolygons PointsPolygons Polygon Procedural Projection Quantize ReadArchive RelativeDetail ReverseOrientation Rotate Scale ScreenWindow ShadingInterpolation ShadingRate Shutter Sides Skew SolidBegin SolidEnd Sphere SubdivisionMesh Surface TextureCoordinates Torus Transform TransformBegin TransformEnd TransformPoints Translate TrimCurve WorldBegin WorldEnd",
      illegal: "</",
      contains: [I.HASH_COMMENT_MODE, I.C_NUMBER_MODE, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE]
    }
  }
  d_2.exports = x29
})
// @from(Start 4729859, End 4730966)
C_2 = Y((Xg3, Z_2) => {
  function c29(I) {
    let G = {
      className: "attribute",
      begin: /[a-zA-Z-_]+/,
      end: /\s*:/,
      excludeEnd: !0,
      starts: {
        end: ";",
        relevance: 0,
        contains: [{
          className: "variable",
          begin: /\.[a-zA-Z-_]+/
        }, {
          className: "keyword",
          begin: /\(optional\)/
        }]
      }
    };
    return {
      name: "Roboconf",
      aliases: ["graph", "instances"],
      case_insensitive: !0,
      keywords: "import",
      contains: [{
        begin: "^facet [a-zA-Z-_][^\\n{]+\\{",
        end: /\}/,
        keywords: "facet",
        contains: [G, I.HASH_COMMENT_MODE]
      }, {
        begin: "^\\s*instance of [a-zA-Z-_][^\\n{]+\\{",
        end: /\}/,
        keywords: "name count channels instance-data instance-state instance of",
        illegal: /\S/,
        contains: ["self", G, I.HASH_COMMENT_MODE]
      }, {
        begin: "^[a-zA-Z-_][^\\n{]+\\{",
        end: /\}/,
        contains: [G, I.HASH_COMMENT_MODE]
      }, I.HASH_COMMENT_MODE]
    }
  }
  Z_2.exports = c29
})
// @from(Start 4730972, End 4734444)
w_2 = Y((Yg3, W_2) => {
  function p29(I) {
    let w = {
        className: "variable",
        variants: [{
          begin: /\$[\w\d#@][\w\d_]*/
        }, {
          begin: /\$\{(.*?)\}/
        }]
      },
      B = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [I.BACKSLASH_ESCAPE, w, {
          className: "variable",
          begin: /\$\(/,
          end: /\)/,
          contains: [I.BACKSLASH_ESCAPE]
        }]
      },
      A = {
        className: "string",
        begin: /'/,
        end: /'/
      };
    return {
      name: "Microtik RouterOS script",
      aliases: ["mikrotik"],
      case_insensitive: !0,
      keywords: {
        $pattern: /:?[\w-]+/,
        literal: "true false yes no nothing nil null",
        keyword: "foreach do while for if from to step else on-error and or not in :" + "foreach do while for if from to step else on-error and or not in".split(" ").join(" :") + " :" + "global local beep delay put len typeof pick log time set find environment terminal error execute parse resolve toarray tobool toid toip toip6 tonum tostr totime".split(" ").join(" :")
      },
      contains: [{
        variants: [{
          begin: /\/\*/,
          end: /\*\//
        }, {
          begin: /\/\//,
          end: /$/
        }, {
          begin: /<\//,
          end: />/
        }],
        illegal: /./
      }, I.COMMENT("^#", "$"), B, A, w, {
        begin: /[\w-]+=([^\s{}[\]()>]+)/,
        relevance: 0,
        returnBegin: !0,
        contains: [{
          className: "attribute",
          begin: /[^=]+/
        }, {
          begin: /=/,
          endsWithParent: !0,
          relevance: 0,
          contains: [B, A, w, {
            className: "literal",
            begin: "\\b(" + "true false yes no nothing nil null".split(" ").join("|") + ")\\b"
          }, {
            begin: /("[^"]*"|[^\s{}[\]]+)/
          }]
        }]
      }, {
        className: "number",
        begin: /\*[0-9a-fA-F]+/
      }, {
        begin: "\\b(" + "add remove enable disable set get print export edit find run debug error info warning".split(" ").join("|") + ")([\\s[(\\]|])",
        returnBegin: !0,
        contains: [{
          className: "builtin-name",
          begin: /\w+/
        }]
      }, {
        className: "built_in",
        variants: [{
          begin: "(\\.\\./|/|\\s)((" + "traffic-flow traffic-generator firewall scheduler aaa accounting address-list address align area bandwidth-server bfd bgp bridge client clock community config connection console customer default dhcp-client dhcp-server discovery dns e-mail ethernet filter firmware gps graphing group hardware health hotspot identity igmp-proxy incoming instance interface ip ipsec ipv6 irq l2tp-server lcd ldp logging mac-server mac-winbox mangle manual mirror mme mpls nat nd neighbor network note ntp ospf ospf-v3 ovpn-server page peer pim ping policy pool port ppp pppoe-client pptp-server prefix profile proposal proxy queue radius resource rip ripng route routing screen script security-profiles server service service-port settings shares smb sms sniffer snmp snooper socks sstp-server system tool tracking type upgrade upnp user-manager users user vlan secret vrrp watchdog web-access wireless pptp pppoe lan wan layer7-protocol lease simple raw".split(" ").join("|") + ");?\\s)+"
        }, {
          begin: /\.\./,
          relevance: 0
        }]
      }]
    }
  }
  W_2.exports = p29
})
// @from(Start 4734450, End 4735705)
A_2 = Y((_g3, B_2) => {
  function i29(I) {
    return {
      name: "RenderMan RSL",
      keywords: {
        keyword: "float color point normal vector matrix while for if do return else break extern continue",
        built_in: "abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp faceforward filterstep floor format fresnel incident length lightsource log match max min mod noise normalize ntransform opposite option phong pnoise pow printf ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan texture textureinfo trace transform vtransform xcomp ycomp zcomp"
      },
      illegal: "</",
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.QUOTE_STRING_MODE, I.APOS_STRING_MODE, I.C_NUMBER_MODE, {
        className: "meta",
        begin: "#",
        end: "$"
      }, {
        className: "class",
        beginKeywords: "surface displacement light volume imager",
        end: "\\("
      }, {
        beginKeywords: "illuminate illuminance gather",
        end: "\\("
      }]
    }
  }
  B_2.exports = i29
})
// @from(Start 4735711, End 4739705)
X_2 = Y((Dg3, V_2) => {
  function n29(I) {
    return {
      name: "Oracle Rules Language",
      keywords: {
        keyword: "BILL_PERIOD BILL_START BILL_STOP RS_EFFECTIVE_START RS_EFFECTIVE_STOP RS_JURIS_CODE RS_OPCO_CODE INTDADDATTRIBUTE|5 INTDADDVMSG|5 INTDBLOCKOP|5 INTDBLOCKOPNA|5 INTDCLOSE|5 INTDCOUNT|5 INTDCOUNTSTATUSCODE|5 INTDCREATEMASK|5 INTDCREATEDAYMASK|5 INTDCREATEFACTORMASK|5 INTDCREATEHANDLE|5 INTDCREATEOVERRIDEDAYMASK|5 INTDCREATEOVERRIDEMASK|5 INTDCREATESTATUSCODEMASK|5 INTDCREATETOUPERIOD|5 INTDDELETE|5 INTDDIPTEST|5 INTDEXPORT|5 INTDGETERRORCODE|5 INTDGETERRORMESSAGE|5 INTDISEQUAL|5 INTDJOIN|5 INTDLOAD|5 INTDLOADACTUALCUT|5 INTDLOADDATES|5 INTDLOADHIST|5 INTDLOADLIST|5 INTDLOADLISTDATES|5 INTDLOADLISTENERGY|5 INTDLOADLISTHIST|5 INTDLOADRELATEDCHANNEL|5 INTDLOADSP|5 INTDLOADSTAGING|5 INTDLOADUOM|5 INTDLOADUOMDATES|5 INTDLOADUOMHIST|5 INTDLOADVERSION|5 INTDOPEN|5 INTDREADFIRST|5 INTDREADNEXT|5 INTDRECCOUNT|5 INTDRELEASE|5 INTDREPLACE|5 INTDROLLAVG|5 INTDROLLPEAK|5 INTDSCALAROP|5 INTDSCALE|5 INTDSETATTRIBUTE|5 INTDSETDSTPARTICIPANT|5 INTDSETSTRING|5 INTDSETVALUE|5 INTDSETVALUESTATUS|5 INTDSHIFTSTARTTIME|5 INTDSMOOTH|5 INTDSORT|5 INTDSPIKETEST|5 INTDSUBSET|5 INTDTOU|5 INTDTOURELEASE|5 INTDTOUVALUE|5 INTDUPDATESTATS|5 INTDVALUE|5 STDEV INTDDELETEEX|5 INTDLOADEXACTUAL|5 INTDLOADEXCUT|5 INTDLOADEXDATES|5 INTDLOADEX|5 INTDLOADEXRELATEDCHANNEL|5 INTDSAVEEX|5 MVLOAD|5 MVLOADACCT|5 MVLOADACCTDATES|5 MVLOADACCTHIST|5 MVLOADDATES|5 MVLOADHIST|5 MVLOADLIST|5 MVLOADLISTDATES|5 MVLOADLISTHIST|5 IF FOR NEXT DONE SELECT END CALL ABORT CLEAR CHANNEL FACTOR LIST NUMBER OVERRIDE SET WEEK DISTRIBUTIONNODE ELSE WHEN THEN OTHERWISE IENUM CSV INCLUDE LEAVE RIDER SAVE DELETE NOVALUE SECTION WARN SAVE_UPDATE DETERMINANT LABEL REPORT REVENUE EACH IN FROM TOTAL CHARGE BLOCK AND OR CSV_FILE RATE_CODE AUXILIARY_DEMAND UIDACCOUNT RS BILL_PERIOD_SELECT HOURS_PER_MONTH INTD_ERROR_STOP SEASON_SCHEDULE_NAME ACCOUNTFACTOR ARRAYUPPERBOUND CALLSTOREDPROC GETADOCONNECTION GETCONNECT GETDATASOURCE GETQUALIFIER GETUSERID HASVALUE LISTCOUNT LISTOP LISTUPDATE LISTVALUE PRORATEFACTOR RSPRORATE SETBINPATH SETDBMONITOR WQ_OPEN BILLINGHOURS DATE DATEFROMFLOAT DATETIMEFROMSTRING DATETIMETOSTRING DATETOFLOAT DAY DAYDIFF DAYNAME DBDATETIME HOUR MINUTE MONTH MONTHDIFF MONTHHOURS MONTHNAME ROUNDDATE SAMEWEEKDAYLASTYEAR SECOND WEEKDAY WEEKDIFF YEAR YEARDAY YEARSTR COMPSUM HISTCOUNT HISTMAX HISTMIN HISTMINNZ HISTVALUE MAXNRANGE MAXRANGE MINRANGE COMPIKVA COMPKVA COMPKVARFROMKQKW COMPLF IDATTR FLAG LF2KW LF2KWH MAXKW POWERFACTOR READING2USAGE AVGSEASON MAXSEASON MONTHLYMERGE SEASONVALUE SUMSEASON ACCTREADDATES ACCTTABLELOAD CONFIGADD CONFIGGET CREATEOBJECT CREATEREPORT EMAILCLIENT EXPBLKMDMUSAGE EXPMDMUSAGE EXPORT_USAGE FACTORINEFFECT GETUSERSPECIFIEDSTOP INEFFECT ISHOLIDAY RUNRATE SAVE_PROFILE SETREPORTTITLE USEREXIT WATFORRUNRATE TO TABLE ACOS ASIN ATAN ATAN2 BITAND CEIL COS COSECANT COSH COTANGENT DIVQUOT DIVREM EXP FABS FLOOR FMOD FREPM FREXPN LOG LOG10 MAX MAXN MIN MINNZ MODF POW ROUND ROUND2VALUE ROUNDINT SECANT SIN SINH SQROOT TAN TANH FLOAT2STRING FLOAT2STRINGNC INSTR LEFT LEN LTRIM MID RIGHT RTRIM STRING STRINGNC TOLOWER TOUPPER TRIM NUMDAYS READ_DATE STAGING",
        built_in: "IDENTIFIER OPTIONS XML_ELEMENT XML_OP XML_ELEMENT_OF DOMDOCCREATE DOMDOCLOADFILE DOMDOCLOADXML DOMDOCSAVEFILE DOMDOCGETROOT DOMDOCADDPI DOMNODEGETNAME DOMNODEGETTYPE DOMNODEGETVALUE DOMNODEGETCHILDCT DOMNODEGETFIRSTCHILD DOMNODEGETSIBLING DOMNODECREATECHILDELEMENT DOMNODESETATTRIBUTE DOMNODEGETCHILDELEMENTCT DOMNODEGETFIRSTCHILDELEMENT DOMNODEGETSIBLINGELEMENT DOMNODEGETATTRIBUTECT DOMNODEGETATTRIBUTEI DOMNODEGETATTRIBUTEBYNAME DOMNODEGETBYNAME"
      },
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.C_NUMBER_MODE, {
        className: "literal",
        variants: [{
          begin: "#\\s+",
          relevance: 0
        }, {
          begin: "#[a-zA-Z .]+"
        }]
      }]
    }
  }
  V_2.exports = n29
})
// @from(Start 4739711, End 4742810)
__2 = Y((Hg3, Y_2) => {
  function r29(I) {
    let G = "abstract as async await become box break const continue crate do dyn else enum extern false final fn for if impl in let loop macro match mod move mut override priv pub ref return self Self static struct super trait true try type typeof unsafe unsized use virtual where while yield",
      Z = "drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!";
    return {
      name: "Rust",
      aliases: ["rs"],
      keywords: {
        $pattern: I.IDENT_RE + "!?",
        keyword: G,
        literal: "true false Some None Ok Err",
        built_in: Z
      },
      illegal: "</",
      contains: [I.C_LINE_COMMENT_MODE, I.COMMENT("/\\*", "\\*/", {
        contains: ["self"]
      }), I.inherit(I.QUOTE_STRING_MODE, {
        begin: /b?"/,
        illegal: null
      }), {
        className: "string",
        variants: [{
          begin: /r(#*)"(.|\n)*?"\1(?!#)/
        }, {
          begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/
        }]
      }, {
        className: "symbol",
        begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
      }, {
        className: "number",
        variants: [{
          begin: "\\b0b([01_]+)([ui](8|16|32|64|128|size)|f(32|64))?"
        }, {
          begin: "\\b0o([0-7_]+)([ui](8|16|32|64|128|size)|f(32|64))?"
        }, {
          begin: "\\b0x([A-Fa-f0-9_]+)([ui](8|16|32|64|128|size)|f(32|64))?"
        }, {
          begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)([ui](8|16|32|64|128|size)|f(32|64))?"
        }],
        relevance: 0
      }, {
        className: "function",
        beginKeywords: "fn",
        end: "(\\(|<)",
        excludeEnd: !0,
        contains: [I.UNDERSCORE_TITLE_MODE]
      }, {
        className: "meta",
        begin: "#!?\\[",
        end: "\\]",
        contains: [{
          className: "meta-string",
          begin: /"/,
          end: /"/
        }]
      }, {
        className: "class",
        beginKeywords: "type",
        end: ";",
        contains: [I.inherit(I.UNDERSCORE_TITLE_MODE, {
          endsParent: !0
        })],
        illegal: "\\S"
      }, {
        className: "class",
        beginKeywords: "trait enum struct union",
        end: /\{/,
        contains: [I.inherit(I.UNDERSCORE_TITLE_MODE, {
          endsParent: !0
        })],
        illegal: "[\\w\\d]"
      }, {
        begin: I.IDENT_RE + "::",
        keywords: {
          built_in: Z
        }
      }, {
        begin: "->"
      }]
    }
  }
  Y_2.exports = r29
})
// @from(Start 4742816, End 4746793)
H_2 = Y((Fg3, D_2) => {
  function a29(I) {
    let d = "do if then else end until while abort array attrib by call cards cards4 catname continue datalines datalines4 delete delim delimiter display dm drop endsas error file filename footnote format goto in infile informat input keep label leave length libname link list lostcard merge missing modify options output out page put redirect remove rename replace retain return select set skip startsas stop title update waitsas where window x systask add and alter as cascade check create delete describe distinct drop foreign from group having index insert into in key like message modify msgtype not null on or order primary references reset restrict select set table unique update validate view where",
      G = "abs|addr|airy|arcos|arsin|atan|attrc|attrn|band|betainv|blshift|bnot|bor|brshift|bxor|byte|cdf|ceil|cexist|cinv|close|cnonct|collate|compbl|compound|compress|cos|cosh|css|curobs|cv|daccdb|daccdbsl|daccsl|daccsyd|dacctab|dairy|date|datejul|datepart|datetime|day|dclose|depdb|depdbsl|depdbsl|depsl|depsl|depsyd|depsyd|deptab|deptab|dequote|dhms|dif|digamma|dim|dinfo|dnum|dopen|doptname|doptnum|dread|dropnote|dsname|erf|erfc|exist|exp|fappend|fclose|fcol|fdelete|fetch|fetchobs|fexist|fget|fileexist|filename|fileref|finfo|finv|fipname|fipnamel|fipstate|floor|fnonct|fnote|fopen|foptname|foptnum|fpoint|fpos|fput|fread|frewind|frlen|fsep|fuzz|fwrite|gaminv|gamma|getoption|getvarc|getvarn|hbound|hms|hosthelp|hour|ibessel|index|indexc|indexw|input|inputc|inputn|int|intck|intnx|intrr|irr|jbessel|juldate|kurtosis|lag|lbound|left|length|lgamma|libname|libref|log|log10|log2|logpdf|logpmf|logsdf|lowcase|max|mdy|mean|min|minute|mod|month|mopen|mort|n|netpv|nmiss|normal|note|npv|open|ordinal|pathname|pdf|peek|peekc|pmf|point|poisson|poke|probbeta|probbnml|probchi|probf|probgam|probhypr|probit|probnegb|probnorm|probt|put|putc|putn|qtr|quote|ranbin|rancau|ranexp|rangam|range|rank|rannor|ranpoi|rantbl|rantri|ranuni|repeat|resolve|reverse|rewind|right|round|saving|scan|sdf|second|sign|sin|sinh|skewness|soundex|spedis|sqrt|std|stderr|stfips|stname|stnamel|substr|sum|symget|sysget|sysmsg|sysprod|sysrc|system|tan|tanh|time|timepart|tinv|tnonct|today|translate|tranwrd|trigamma|trim|trimn|trunc|uniform|upcase|uss|var|varfmt|varinfmt|varlabel|varlen|varname|varnum|varray|varrayx|vartype|verify|vformat|vformatd|vformatdx|vformatn|vformatnx|vformatw|vformatwx|vformatx|vinarray|vinarrayx|vinformat|vinformatd|vinformatdx|vinformatn|vinformatnx|vinformatw|vinformatwx|vinformatx|vlabel|vlabelx|vlength|vlengthx|vname|vnamex|vtype|vtypex|weekday|year|yyq|zipfips|zipname|zipnamel|zipstate";
    return {
      name: "SAS",
      case_insensitive: !0,
      keywords: {
        literal: "null missing _all_ _automatic_ _character_ _infile_ _n_ _name_ _null_ _numeric_ _user_ _webout_",
        meta: d
      },
      contains: [{
        className: "keyword",
        begin: /^\s*(proc [\w\d_]+|data|run|quit)[\s;]/
      }, {
        className: "variable",
        begin: /&[a-zA-Z_&][a-zA-Z0-9_]*\.?/
      }, {
        className: "emphasis",
        begin: /^\s*datalines|cards.*;/,
        end: /^\s*;\s*$/
      }, {
        className: "built_in",
        begin: "%(" + "bquote|nrbquote|cmpres|qcmpres|compstor|datatyp|display|do|else|end|eval|global|goto|if|index|input|keydef|label|left|length|let|local|lowcase|macro|mend|nrbquote|nrquote|nrstr|put|qcmpres|qleft|qlowcase|qscan|qsubstr|qsysfunc|qtrim|quote|qupcase|scan|str|substr|superq|syscall|sysevalf|sysexec|sysfunc|sysget|syslput|sysprod|sysrc|sysrput|then|to|trim|unquote|until|upcase|verify|while|window" + ")"
      }, {
        className: "name",
        begin: /%[a-zA-Z_][a-zA-Z_0-9]*/
      }, {
        className: "meta",
        begin: "[^%](" + G + ")[(]"
      }, {
        className: "string",
        variants: [I.APOS_STRING_MODE, I.QUOTE_STRING_MODE]
      }, I.COMMENT("\\*", ";"), I.C_BLOCK_COMMENT_MODE]
    }
  }
  D_2.exports = a29
})
// @from(Start 4746799, End 4749279)
g_2 = Y((gg3, F_2) => {
  function s29(I) {
    let d = {
        className: "meta",
        begin: "@[A-Za-z]+"
      },
      G = {
        className: "subst",
        variants: [{
          begin: "\\$[A-Za-z0-9_]+"
        }, {
          begin: /\$\{/,
          end: /\}/
        }]
      },
      Z = {
        className: "string",
        variants: [{
          begin: '"""',
          end: '"""'
        }, {
          begin: '"',
          end: '"',
          illegal: "\\n",
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: '[a-z]+"',
          end: '"',
          illegal: "\\n",
          contains: [I.BACKSLASH_ESCAPE, G]
        }, {
          className: "string",
          begin: '[a-z]+"""',
          end: '"""',
          contains: [G],
          relevance: 10
        }]
      },
      C = {
        className: "symbol",
        begin: "'\\w[\\w\\d_]*(?!')"
      },
      W = {
        className: "type",
        begin: "\\b[A-Z][A-Za-z0-9_]*",
        relevance: 0
      },
      w = {
        className: "title",
        begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
        relevance: 0
      },
      B = {
        className: "class",
        beginKeywords: "class object trait type",
        end: /[:={\[\n;]/,
        excludeEnd: !0,
        contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, {
          beginKeywords: "extends with",
          relevance: 10
        }, {
          begin: /\[/,
          end: /\]/,
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0,
          contains: [W]
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0,
          contains: [W]
        }, w]
      },
      A = {
        className: "function",
        beginKeywords: "def",
        end: /[:={\[(\n;]/,
        excludeEnd: !0,
        contains: [w]
      };
    return {
      name: "Scala",
      keywords: {
        literal: "true false null",
        keyword: "type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit"
      },
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, Z, C, W, A, B, I.C_NUMBER_MODE, d]
    }
  }
  F_2.exports = s29
})
// @from(Start 4749285, End 4753666)
K_2 = Y((Jg3, J_2) => {
  function o29(I) {
    let Z = "(-|\\+)?\\d+([./]\\d+)?[+\\-](-|\\+)?\\d+([./]\\d+)?i",
      C = {
        $pattern: "[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+",
        "builtin-name": "case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"
      },
      W = {
        className: "literal",
        begin: "(#t|#f|#\\\\[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+|#\\\\.)"
      },
      w = {
        className: "number",
        variants: [{
          begin: "(-|\\+)?\\d+([./]\\d+)?",
          relevance: 0
        }, {
          begin: Z,
          relevance: 0
        }, {
          begin: "#b[0-1]+(/[0-1]+)?"
        }, {
          begin: "#o[0-7]+(/[0-7]+)?"
        }, {
          begin: "#x[0-9a-f]+(/[0-9a-f]+)?"
        }]
      },
      B = I.QUOTE_STRING_MODE,
      A = [I.COMMENT(";", "$", {
        relevance: 0
      }), I.COMMENT("#\\|", "\\|#")],
      V = {
        begin: "[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+",
        relevance: 0
      },
      X = {
        className: "symbol",
        begin: "'[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+"
      },
      _ = {
        endsWithParent: !0,
        relevance: 0
      },
      F = {
        variants: [{
          begin: /'/
        }, {
          begin: "`"
        }],
        contains: [{
          begin: "\\(",
          end: "\\)",
          contains: ["self", W, B, w, V, X]
        }]
      },
      g = {
        className: "name",
        relevance: 0,
        begin: "[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+",
        keywords: C
      },
      K = {
        variants: [{
          begin: "\\(",
          end: "\\)"
        }, {
          begin: "\\[",
          end: "\\]"
        }],
        contains: [{
          begin: /lambda/,
          endsWithParent: !0,
          returnBegin: !0,
          contains: [g, {
            endsParent: !0,
            variants: [{
              begin: /\(/,
              end: /\)/
            }, {
              begin: /\[/,
              end: /\]/
            }],
            contains: [V]
          }]
        }, g, _]
      };
    return _.contains = [W, w, B, V, X, F, K].concat(A), {
      name: "Scheme",
      illegal: /\S/,
      contains: [I.SHEBANG(), w, B, X, F, K].concat(A)
    }
  }
  J_2.exports = o29
})
// @from(Start 4753672, End 4755210)
z_2 = Y((Kg3, N_2) => {
  function e29(I) {
    let d = [I.C_NUMBER_MODE, {
      className: "string",
      begin: `'|"`,
      end: `'|"`,
      contains: [I.BACKSLASH_ESCAPE, {
        begin: "''"
      }]
    }];
    return {
      name: "Scilab",
      aliases: ["sci"],
      keywords: {
        $pattern: /%?\w+/,
        keyword: "abort break case clear catch continue do elseif else endfunction end for function global if pause return resume select try then while",
        literal: "%f %F %t %T %pi %eps %inf %nan %e %i %z %s",
        built_in: "abs and acos asin atan ceil cd chdir clearglobal cosh cos cumprod deff disp error exec execstr exists exp eye gettext floor fprintf fread fsolve imag isdef isempty isinfisnan isvector lasterror length load linspace list listfiles log10 log2 log max min msprintf mclose mopen ones or pathconvert poly printf prod pwd rand real round sinh sin size gsort sprintf sqrt strcat strcmps tring sum system tanh tan type typename warning zeros matrix"
      },
      illegal: '("|#|/\\*|\\s+/\\w+)',
      contains: [{
        className: "function",
        beginKeywords: "function",
        end: "$",
        contains: [I.UNDERSCORE_TITLE_MODE, {
          className: "params",
          begin: "\\(",
          end: "\\)"
        }]
      }, {
        begin: "[a-zA-Z_][a-zA-Z_0-9]*[\\.']+",
        relevance: 0
      }, {
        begin: "\\[",
        end: "\\][\\.']*",
        relevance: 0,
        contains: d
      }, I.COMMENT("//", "$")].concat(d)
    }
  }
  N_2.exports = e29
})